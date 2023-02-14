import "./style.css";

const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
    return;
  } else {
    return result;
  }
};

const num1 = 5;
const num2 = 3.4;
const printResult = true;
const resultPhrase = "Result is ";

add(num1, num2, printResult, resultPhrase);
// console.log(result);

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  age: 29,
  name: "pratik",
  hobbies: ["Reading", "Cooking"],
  role: [2, "Author"],
};

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
const newPerson = {
  age: 29,
  name: "pratik",
  hobbies: ["Reading", "Cooking"],
  role: Role.ADMIN,
};

if (newPerson.role === Role.ADMIN) {
  console.log("is Admin");
}

type resultType = "as-number" | "as-text";
const combine = (
  input1: number | string,
  input2: number | string,
  resultConvertor: resultType
) => {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConvertor === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
};

console.log(combine(2, 3, "as-number"));
console.log(combine(2, 31, "as-text"));
console.log(combine("pratik", " tiwari", "as-text"));

const newAdd = (n1: number, n2: number) => {
  return n1 + n2;
};

const printOutput = (num: number): void => {
  console.log("Result: " + num);
};

printOutput(newAdd(8, 8));

let combineValues: (a: number, b: number) => number;

combineValues = newAdd;

console.log(combineValues(8, 1));

const addAndPrint = (n1: number, n2: number, cb: (a: number) => void) => {
  let result = n1 + n2;
  cb(result);
};

addAndPrint(2, 4, printOutput);

let userInput: unknown;
let userName: string;

userInput = "Pratik";

if (typeof userInput === "string") {
  userName = userInput;
}

const generateError = (message: string, code: number): never => {
  throw { message: message, errorCode: code };
};

// generateError("An error occured", 500);

interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "Pratik",
  age: 30,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user1.greet("Hi there - I am");

interface Named {
  readonly name: string;
  outputname?: string;
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Human implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let newHuman: Human;
newHuman = new Human("Pratik");
newHuman.greet("Hello, I am");

interface AddFn {
  (a: number, b: number): number;
}

let sum: AddFn;
sum = (n1: number, n2: number) => {
  return n1 + n2;
};
