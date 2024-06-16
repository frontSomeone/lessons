let user = {
  name: 'Ivan',
  age: 28
}
console.log(user.prototype); // undefined
console.log(user.__proto__); // Object.prototype
// let user = new Object()


let array = [1, 2, 3, 4, 5, 6, 7];
console.log(array.prototype); // undefined
console.log(array.__proto__); // Array.prototype
// let array = new Array() => Object.prototype

class MyClass {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log('Hello');
  }
}
console.log(MyClass.prototype); // Да, есть
console.log(MyClass.__proto__); // Object.prototype

const myName = new MyClass('Ivan');
console.log(myName.prototype); // undefined
console.log(myName.__proto__); // MyClass.prototype

const myName1 = new MyClass('Ivan');
const myName2 = new MyClass('Vlad');
console.log(myName1.__proto__ === myName2.__proto__); // true MyClass.prototype === MyClass.prototype

const myFunction = () => 'Hello';
console.log(myFunction.prototype); 
console.log(myFunction.__proto__); 
