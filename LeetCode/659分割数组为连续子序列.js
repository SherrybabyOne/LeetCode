/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
  this.numsObject={};
  this.numsCountObject={};

  const numCounts= function(nums){
      let i = 0;
      nums.forEach((item)=>{
          if(this.numsCountObject[item]){
              this.numsCountObject[item] = this.numsCountObject[item] +1;
          }else{
              this.numsCountObject[item] = 1;
          }

          this.numsObject[item] = 0
      });
  }
  numCounts(nums);

  for( let ii= 0; ii < nums.length; ii++ ){
      let curr = nums[ii];
      if( this.numsCountObject[curr] === 0  ){
          continue;
      }else if( this.numsCountObject[curr] > 0 && this.numsObject[curr-1]>0 ){
          this.numsCountObject[curr] = this.numsCountObject[curr] -1 ;
          this.numsObject[curr-1] = this.numsObject[curr-1] -1;
          this.numsObject[curr] = this.numsObject[curr]+1;
      }else if(this.numsCountObject[curr] > 0 && this.numsCountObject[curr+1] > 0 &&  this.numsCountObject[curr+2] > 0  ){
          this.numsCountObject[curr] = this.numsCountObject[curr] -1 ;
          this.numsCountObject[curr+1] = this.numsCountObject[curr+1] -1 ;
          this.numsCountObject[curr+2] = this.numsCountObject[curr+2] -1 ;
          this.numsObject[curr+2] = this.numsObject[curr+2]+1;
      }else{
          return false ;
      }
  }
  return true;
};
