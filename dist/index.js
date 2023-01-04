"use strict";
// Basic Types
let id = 5;
let company = "FALASE";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Hello"];
// Tuple
let person = [1, "femi", true];
// Tuple Array
let employee;
employee = [
    [1, "femi"],
    [2, "sam"],
    [3, "ayo"],
];
// Union: to hold more than one types
let pid = 22;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2);
const user = {
    id: 1,
    name: "femi",
};
// Type Assertion: To treat an entity as a diffrent type
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions
const addNum = (x, y) => {
    return x + y;
};
const log = (message) => {
    console.log(message);
};
const user1 = {
    id: 1,
    name: "femi",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registerd`;
    }
}
const femi = new Person(1, "falase");
const mike = new Person(2, "femi");
console.log(femi.register);
console.log(femi, mike);
// Generics
const getArray = (items) => {
    return new Array().concat(items);
};
let numARRAY = getArray([1, 2, 3, 4]);
let strARRAY = getArray(["femi", "same", "dan"]);
strARRAY.push('hello');
