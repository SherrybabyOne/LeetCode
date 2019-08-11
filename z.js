function Person (name) {
    this.name = name
}
var xiaoming = new Person('xiaoming');

console.log(
    xiaoming.name,
    xiaoming.__proto__,
    Person.prototype,
    Person.prototype.constructor
)