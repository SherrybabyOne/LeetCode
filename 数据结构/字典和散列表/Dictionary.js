// 字典
// 以[键，值]的形式存储元素
class Dictionary {
  constructor() {
    this.table = {};
  }

  hasKey(key) {
    return this.table[key] != null;
  }
  set(key, value) {
    if (key != null && value !== null) {
      this.table[key] = value;
      return true;
    }
    return false;
  }
  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[key];
      return true;
    }
    return false;
  }
  get(key) {
    return this.table[key];
  }
  keyValues() {
    return Object.values(this.table);
  }
  keys() {
    return Object.keys(this.table);
  }
  size() {
    return this.keys().length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  clear() {
    this.table = {};
  }
}
