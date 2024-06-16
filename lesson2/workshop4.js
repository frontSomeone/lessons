let dog = {};
let cat = {};
dog.__proto__ === cat.__proto__; // Object.prototype

let users = [];
let admins = [];
users.__proto__ === admins.__proto__; // Array.prototype

let age = 18;
let level = 100;
age.__proto__ === level.__proto__; // Number.prototype

let name1 = 'Ivan';
let name2 = 'Vlad';
name1.__proto__ === name2.__proto__; // String.prototype

function sayHello() {};
let sayGoodbay = function() {};  
let sayAlloha = () => {};  
class SaySomeThing {}; // Function.prototype

const saySomeThing = new SaySomeThing();
saySomeThing.__proto__; // SaySomeThing.prototype

let itsNotHard = true; // Boolean.prototype

SaySomeThing.__proto__ === itsNotHard.__proto__; // False! Function.prototype !== Boolean.prototype