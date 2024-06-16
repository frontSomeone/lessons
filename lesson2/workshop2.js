let user = {
  name: 'Ivan'
}

user.toString(); // => __proto__ => Object.prototype => { toString(){} }

function MyFunction(name, age) {
  this.name = name;
  this.age = age;
}

MyFunction.prototype.sayHello = () => console.log('Hello');

const user1 = new MyFunction('Ivan', 28);
user1.sayHello(); // 'Hello';

// Или через класс:
class MyFunction1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log('Hello');
  }
}