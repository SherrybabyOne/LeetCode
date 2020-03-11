class  Set {
  constructor() {
    this.items = {};
  }
  has (element) {
    // 不使用this.items.hasOwnProperty(element)的原因有：
    // 1. 不是所有的对象都继承了Object.prototype
    // 2. 继承了Object.prototype的对象上的hasOwnProperty方法也有可能被覆盖
    // 使用Object.prototype.hasOwnProperty.call是更安全的做法
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }
  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }
  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }
  clear() {
    this.items = {};
  }
  size() {
    return Object.keys(this.items).length;
  }
  values() {
    return Object.values(this.items);
  }
}
