class  Set {
  constructor() {
    this.items = {};
  }
  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }
}