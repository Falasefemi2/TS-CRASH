// Basic Types

let id: number = 5;
let company: string = "FALASE";
let isPublished: boolean = true;
let x: any = "Hello";
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "Hello"];

// Tuple
let person: [number, string, boolean] = [1, "femi", true];
// Tuple Array
let employee: [number, string][];

employee = [
  [1, "femi"],
  [2, "sam"],
  [3, "ayo"],
];

// Union: to hold more than one types
let pid: string | number = 22;

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "left",
  Right = "Right",
}

console.log(Direction2);

// Objects
type User = {
    id: number,
    name: string
}

const user: User = {
  id: 1,
  name: "femi",
};

// Type Assertion: To treat an entity as a diffrent type
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number