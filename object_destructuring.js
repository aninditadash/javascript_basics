// Object Destructuring

const person = {
  firstName: "Alice",
  age: 30,
  city: "New York",
};

// Destructuring to extract 'firstName' and 'age'
const { firstName, age } = person;
console.log(firstName); // Alice
console.log(age); // 30

// Destructuring with a different variable name
const { city: personLocation } = person;
console.log(personLocation); // New York

const person2 = {
  firstName: "Alice",
  age: 30,
  city: "New York",
  occupation: "Engineer",
};

// Destructuring with default values
const { occupation1 = "Developer" } = person;
console.log(occupation1); // Developer (since 'occupation' is not in 'person')

// Assigning to new variable name and destructuring with default values
const { occupation2: personOccupation = "Developer" } = person2;
console.log(personOccupation); // Developer (since 'occupation' is not in 'person')

console.log("================================================");

// Object Destructuring with Functions
function printData({ firstName, age, city, occupation }) {
  console.log(firstName, age, city, occupation);
}

printData(person2);

console.log("================================================");

// Binding patterns: the pattern starts with a declaration keyword (var, let, or const)
// Then, each individual property must either be bound to a variable or further destructured.
// Here, the variables: `a` and `d` are bound.

const obj = { a: 1, b: { c: 2 } };
const {
  a,
  b: { c: d },
} = obj;

console.log(a, d);

// Assignment patterns: the pattern does not start with a keyword.
// Each destructured property is assigned to a target of assignment —
// which may either be declared beforehand with var or let, or is a property of another object.
// Here, the properties `a` and `b` are assigned to properties of `numbers`

const numbers = [];
const obj1 = { a: 1, b: 2 };
({ a: numbers[0], b: numbers[1] } = obj1);
console.log(numbers);

// Assignment patterns can be used as the left-hand side of the assignment operator.
// and we cannot usee them with compound assignment operators such as += or *=.

// Destructuring with default values
const [a1 = 1] = []; // a1 is 1
const { b1 = 2 } = { b1: undefined }; // b1 is 2
const { c1 = 2 } = { c1: null }; // c1 is null

// Rest properties and rest elements
// A destructuring pattern can end with a rest property ...rest (for example).
// For array destructuring, it collects remaining elements of the iterable into a new array called rest.
// For object destructuring, it copies all enumerable own properties of the object that are not already picked off by the
// destructuring pattern into a new object called rest.

const { a11, ...others } = { a11: 1, b11: 2, c11: 3 };
console.log(others); // { b11: 2, c11: 3 }

const [first, ...others2] = [1, 2, 3];
console.log(others2); // [2, 3]

console.log("================================================");

// Swapping variables: Two variables values can be swapped in one destructuring expression.
let x = 1;
let y = 3;

[x, y] = [y, x];
console.log(x); // 3
console.log(y); // 1

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1, 3, 2]

// Computed object property names and destructuring
const key = "z";
const { [key]: foo } = { [key]: "bar" };

console.log(foo); // "bar"
