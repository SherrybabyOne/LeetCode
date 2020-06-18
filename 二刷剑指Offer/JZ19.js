function printMatrix(matrix)
{
    // write code here
    var row=matrix.length;
    var col=matrix[0].length;
    var res=[];
    if(row==0||col==0){
        return res;
    }
    var left=0,
        top=0,
        right=col-1,
        bottom=row-1;
    while(left<=right&&top<=bottom){
        for(var i=left;i<=right;i++)
            res.push(matrix[top][i]);
        for(var i=top+1;i<=bottom;i++)
            res.push(matrix[i][right]);
        if(top!=bottom)
            for(var i=right-1;i>=left;i--)
                res.push(matrix[bottom][i]);
        if(left!=right)
            for(var i=bottom-1;i>top;i--)
                res.push(matrix[i][left]);
        left++,top++,right--,bottom--;
    }
    return res;
}