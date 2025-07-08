// Different sematics of Spread Syntax

// Only iterable values, like Array and String, can be spread in array literals and argument lists.
// Many objects are not iterable, including all plain objects that lack a Symbol.iterator method.

const obj = { key1: "value1" };
// const array = [...obj]; // TypeError: obj is not iterable

const str1 = "Hello";
const array1 = [...str1];
console.log(array1); // ['H', 'e', 'l', 'l', 'o']

// On the other hand, spreading in object literals enumerates the own properties of the value.
// For typical arrays, all indices are enumerable own properties, so arrays can be spread into objects.
const array2 = [1, 2, 3];
const obj2 = { ...array2 }; // { 0: 1, 1: 2, 2: 3 }
console.log(obj2);

// All primitives can be spread in objects.
// Only strings have enumerable own properties, and spreading anything else doesn't create properties on the new object.
const obj3 = { ...true, ..."spread", ...10 };
console.log(obj3); // {0: 's', 1: 'p', 2: 'r', 3: 'e', 4: 'a', 5: 'd'}

console.log("================================================");

// Object Spread Syntax

const obj11 = { a: 1, b: 2 };
const obj22 = { c: 3, d: 4 };

// Cloning an object
const clonedObj = { ...obj11 };
console.log(clonedObj); // Output: { a: 1, b: 2 }

// Merging objects
const mergedObj = { ...obj11, ...obj22 };
console.log(mergedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }

// Overwriting properties during merge
const updatedObj = { ...obj11, b: 5 };
console.log(updatedObj); // Output: { a: 1, b: 5 }

console.log("================================================");

// Here, we have reference values inside the object, e.g. `hobbies` array
const person1 = { firstName: "Max", age: 30, hobbies: ["Sports", "Reading"] };

// Spread operator is not creating a deep copy of the `person` object having other reference
// types like array.
const person2 = { ...person1, firstName: "John" };

person1.hobbies.push("Coding");

console.log(person1);
console.log(person2);
console.log("================================================");

// Another way here to create a deep copy for the `hobbies` array, by adding a new object
// and spreading the elements of the `hobbies` array literal
const person3 = {
  ...person1,
  age: 40,
  firstName: "Jane",
  hobbies: [...person1.hobbies],
};

person1.hobbies.push("Cycling");

console.log(person1);
console.log(person2);
console.log(person3);

console.log("================================================");

// Concatenate arrays
const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];
const arr3 = arr1.concat(arr2); // Normal Syntax
console.log(arr3);
console.log([...arr1, ...arr2]); // Using Spread syntax

// Conditionally adding values to an array
const isSummer = false;
const fruits_arr = ["apple", "banana", ...(isSummer ? ["watermelon"] : [])];
console.log(fruits_arr); // ['apple', 'banana']

// Conditionally adding properties to an object (using condition operator)
const fruits_obj = {
  apple: 10,
  banana: 5,
  ...(isSummer ? { watermelon: 30 } : {}),
};
console.log(fruits_obj); // { apple: 10, banana: 5 }

const fruits_obj1 = {
  apple: 10,
  banana: 5,
  ...(true && { watermelon: 30 }),
};
console.log(fruits_obj1); // {apple: 10, banana: 5, watermelon: 30}
