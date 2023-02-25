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

// intersection types

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type EleveatedEmployee = Admin & Employee;

const e1: EleveatedEmployee = {
  name: "Pratik",
  privileges: ["create-server"],
  startDate: new Date(),
};

console.log(e1);

type Combinable = number | string;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// type guards

const addNum = (a: Combinable, b: Combinable) => {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
};

type UnknownEmployee = Admin | Employee;

const printEmployeeInfo = (emp: UnknownEmployee) => {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
};

const e2: Employee = {
  name: "Mohit",
  startDate: new Date("02/09/2021"),
};

printEmployeeInfo(e1);
printEmployeeInfo(e2);

class Car {
  drive() {
    console.log("Driving a Car...");
  }
}

class Truck {
  drive() {
    console.log("Driving a Truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo: ", amount);
  }
}

type Vehicle = Car | Truck;

const useVehicle = (vehicle: Vehicle) => {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
};

const v1 = new Car();
const v2 = new Truck();

useVehicle(v1);
useVehicle(v2);

// discriminated Unions

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {
  let speed: number;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Moving with speed: " + speed);
};

const pigeon: Bird = {
  type: "bird",
  flyingSpeed: 10,
};

moveAnimal(pigeon);

// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!
const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement;
userInputElement.value = "Hi there";

// index properties

interface ErrorContainer {
  id: string;
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  id: "e1",
  email: "not a valid email",
  username: "must start with a character",
};

// function overloads

function sumInput(a: number, b: number): number;
function sumInput(a: string, b: string): string;
function sumInput(a: number, b: string): string;
function sumInput(a: string, b: number): string;
function sumInput(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

const result = sumInput("pratik ", "tiwari");
result.split(" ");

// Generics

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

console.log(merge({ name: "Pratik" }, { age: 30 }));
const mergedObj = merge({ name: "Mohit" }, { age: 30 });
console.log(mergedObj.name);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = `Got 1 element`;
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(["sports", "cooking"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

console.log(extractAndConvert({ name: "mohit", age: 30 }, "name"));

class DataStorage<T extends number | string | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItem() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Pratik");
textStorage.addItem("Mohit");
console.log(textStorage.getItem());
textStorage.removeItem("Pratik");
console.log(textStorage.getItem());

interface Course {
  title: string;
  price: number;
}
interface CourseGoal extends Course {
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  price: number,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.price = price;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["mohit", "pratik"];

// decorators

// function Logger(constructor: Function) {
//   console.log("Logging...");
//   console.log(constructor);
// }

// using decorator factory design

function Logger(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("Template Factory");
  return function <T extends { new(...args: any[]): { name: string } }>(
    OriginalConstructor: T
  ) {
    return class extends OriginalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("Rendering template");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h2")!.textContent = this.name;
        }
      }
    };
  };
}

// @Logger
@Logger("Logging - Human Being")
@WithTemplate("<h2>My Human Being Object</h2>", "temp")
class HumanBeing {
  name = "Pratik";

  constructor() {
    console.log("creating a human being object...");
  }
}

const newMan = new HumanBeing();
console.log(newMan);

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property Decorator");
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator");
  console.log(target, name, descriptor);
}

function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Method decorator");
  console.log(target, name, descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter Decorator");
  console.log(target, name, position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

function AutoBind(target: any, name: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "This works!";

  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const btn = document.querySelector("button");
btn?.addEventListener("click", p.showMessage);

const courseForm = document.querySelector("form")!;

interface ValidatorConfig {
  [property: string]: {
    [validatable: string]: string[]; // ['required','positive']
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propertyName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propertyName]: ["required"],
  };
}
function PositiveNumber(target: any, propertyName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propertyName]: ["positive"],
  };
}
function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}
class NewCourse<T extends Course> {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(data: T) {
    this.title = data.title;
    this.price = data.price;
  }
}

courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new NewCourse({ title, price });
  if (!validate(createdCourse)) {
    alert("Invalid Input, Please try again");
    return;
  }
  console.log(createdCourse);
});
