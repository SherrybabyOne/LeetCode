/**
 * @param {character[][]} matrix
 * @return {number}
 */
function getMaxAreaInRow(row) {
    row=row.concat(-1);
    const stack=[];
    const lrMap={};
    for(let i=0;i<row.length;i++) {
      lrMap[i]={
        l:i,
        r:i+1,
      };
    }
    
    for(let i=0;i<row.length;i++) {
      const h=row[i];
      let top=stack[stack.length-1];
      if(stack.length===0 || row[top]<h) {
        stack.push(i);
        if(top!=null) {
          lrMap[i].l=top+1;
        } else {
          lrMap[i].l=0;
        }
      } else {
        while(top!=null && row[top]>h) {
          const popped=stack.pop();
          lrMap[popped].r=i;
          top=stack[stack.length-1];
        }
        stack.push(i);
        if(top!=null) {
          lrMap[i].l=top+1;
        } else {
          lrMap[i].l=0;
        }
      }
    }
    
    let maxArea=0;
    Object.keys(lrMap).forEach((k)=>{
      if(+k<=row.length-1) {
        const lr=lrMap[k];
        maxArea=Math.max(maxArea,(lr.r-lr.l)*row[k]);
      }
    });
    return maxArea;
  }
  
  var maximalRectangle = function(matrix) {
    if(matrix.length===0) {
      return 0;
    }
  
    const heights=new Array(matrix.length).fill(0).map(_=>new Array(matrix[0].length).fill(0));
    for(let i=0;i<matrix[0].length;i++) {
      heights[0][i]=matrix[0][i]==='1'?1:0;
    }
    
    for(let i=1;i<matrix.length;i++) {
      for(let j=0;j<matrix[i].length;j++) {
        if(matrix[i][j]==='1') {
          heights[i][j]=heights[i-1][j]+1;
        }
      }
    }
    
    return Math.max.apply(null,heights.map(getMaxAreaInRow));
  };