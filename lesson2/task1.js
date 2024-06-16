// HomeWork
({}).prototype === ({}).__proto__;

function sayHello() {};
sayHello.prototype === sayHello.__proto__;

function sayHello() {};
function sayGoodbye() {};
sayHello.__proto__ === sayGoodbye.__proto__;
sayHello.prototype === sayGoodbye.prototype;

let age = 18;
age.prototype === Number.prototype;
age.__proto__ === Number.prototype;

class MyClass {};
MyClass.__proto__ === Function.prototype;

function sayHello() {};
sayHello.__proto__;

const count = 12;
count.__proto__;