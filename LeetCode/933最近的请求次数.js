var RecentCounter = function() {
  this.val = []
};

/** 
* @param {number} t
* @return {number}
*/
RecentCounter.prototype.ping = function(t) {
  this.val.push(t)
  while( this.val[0] < t-3000){
    this.val.shift()
  }
  return this.val.length
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */