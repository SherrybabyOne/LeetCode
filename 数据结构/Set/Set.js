// 集合Set
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
  clear () {
    this.items = {};
  }
  size () {
    return Object.keys(this.items).length;
  }
  values () {
    return Object.values(this.items);
  }
  // 并集
  union (otherSet) {
    const unionSet = new Set();
    this.values().forEach(value => unionSet.add(value));
    otherSet.values().forEach(value => unionSet.add(value));
    return unionSet;
  }
  // 交集
  intersection (otherSet) {
    const intersectionSet = new Set();
    const values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) intersectionSet.add(values[i]);
    }
    return intersectionSet;
  }
  // 差集
  difference (otherSet) {
    const differenceSet = new Set();
    this.values().forEach(value => {
      if (!otherSet.has(value)) differenceSet.add(value);
    })
    return differenceSet;
  }
  // 子集
  isSubsetOf (otherSet) {
    if (this.size() > otherSet.size()) return false;
    let isSubset = true
    this.values().every(item => {
      if (!otherSet.has(item)) {
        isSubset = false;
        return false;
      }
      return true;
    })
    return isSubset;
  }
}

const a = new Set();
a.add('a');
a.add('b');
a.add('c');
const b = new Set();
b.add('d');
b.add('bb');
b.add('a');
const c = new Set();
c.add('a');
c.add('bb');
console.log(a.union(b));
console.log(a.intersection(b));
console.log(a.difference(b));
console.log(a.isSubsetOf(b));
console.log(c.isSubsetOf(b));
