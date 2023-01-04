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
