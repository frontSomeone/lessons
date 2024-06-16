// HomeWork
console.log(({}).prototype === ({}).__proto__);

function sayHello() {};
console.log(sayHello.prototype === sayHello.__proto__);

function sayHello() {};
function sayGoodbye() {};
console.log(sayHello.__proto__ === sayGoodbye.__proto__);
console.log(sayHello.prototype === sayGoodbye.prototype);

let age = 18;
console.log(age.prototype === Number.prototype);
console.log(age.__proto__ === Number.prototype);

class MyClass {};
console.log(MyClass.__proto__ === Function.prototype);

function sayHello() {};
console.log(sayHello.__proto__);

const count = 12;
console.log(count.__proto__);