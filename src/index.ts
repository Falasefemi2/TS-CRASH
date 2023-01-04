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
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "femi",
};

// Type Assertion: To treat an entity as a diffrent type
let cid: any = 1;
// let customerId = <number>cid
let customerId = cid as number;

// Functions
const addNum = (x: number, y: number): number => {
  return x + y;
};

const log = (message: string | number): void => {
  console.log(message);
};

// Interfaces
interface UserInterface {
  id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: "femi",
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// Classes
class Person {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registerd`
  }
}

const femi = new Person(1, "falase");
const mike = new Person(2, "femi");

console.log(femi.register);


console.log(femi, mike);


// Generics
const getArray = <T>(items: T[]): T[] => {
    return new Array().concat(items)
}

let numARRAY = getArray<number>([1,2,3,4])
let strARRAY = getArray<string>(["femi", "same", "dan"])

strARRAY.push('hello')
