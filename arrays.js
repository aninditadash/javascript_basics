// Array methods

// push(): Adds one or more elements to the end of an array and returns the new length of the array.
let fruits1 = ["apple", "banana"];
fruits1.push("orange");
console.log(fruits1); // ["apple", "banana", "orange"]

// pop(): Removes the last element from an array and returns that element.
let fruits2 = ["apple", "banana", "orange"];
let removedFruit = fruits2.pop();
console.log(removedFruit, fruits2); // orange ["apple", "banana"]

// shift(): Removes the first element from an array and returns that element.
let fruits3 = ["apple", "banana", "orange"];
let removedFruit3 = fruits3.shift();
console.log(removedFruit3, fruits3); // apple ["banana", "orange"]

// unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
let fruits4 = ["banana", "orange", "pineapple", "strawberry"];
const fruitsLength1 = fruits4.unshift("apple");
console.log(fruitsLength1, fruits4); // 5 ["apple", "banana", "orange", "pineapple", "strawberry"]
const fruitsLength2 = fruits4.unshift("lemon", "elderberry");
console.log(fruitsLength2, fruits4); // 7 ["lemon", "elderberry", "apple", "banana", "orange", "pineapple", "strawberry"]

// concat(): Merges two or more arrays and returns a new array, without modifying the existing arrays.
let arr1 = [1, 2];
let arr2 = [3, 4];
let newArr_12 = arr1.concat(arr2);
console.log(newArr_12); // [1, 2, 3, 4]

// join(): Joins all elements of an array into a string. A separator can be specified.
let words1 = ["hello", "world"];
let sentence1 = words1.join(" ");
console.log(sentence1); // "hello world"
sentence1 = words1.join("-");
console.log(sentence1); // "hello-world"

// indexOf(): Returns the index of the first occurrence of a specified value.
// lastIndexOf(): Returns the index of the last occurrence of a specified value.
const str = "hello world hello";
console.log(str.indexOf("hello")); // 0
console.log(str.indexOf("world")); // 6
console.log(str.indexOf("xyz")); // -1

console.log(fruits4); // ["lemon", "elderberry", "apple", "banana", "orange", "pineapple", "strawberry"]
console.log(fruits4.indexOf("apple")); // 2
console.log(fruits4.indexOf("grape")); // -1

// find(): Returns the value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
// findIndex(): Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const foundUser = users.find((user) => user.id === 2);
const foundUserIndex = users.findIndex((user) => user.id == 2);
console.log(foundUserIndex, foundUser); // 1 { id: 2, name: 'Bob' }

const notFoundUser = users.find((user) => user.name === "David");
const notFoundUserIndex = users.findIndex((user) => user.name == "David");
console.log(notFoundUserIndex, notFoundUser); // -1 undefined

// includes(): Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
fruits4 = [
  "lemon",
  "elderberry",
  "apple",
  "banana",
  "orange",
  "pineapple",
  "strawberry",
];
console.log(fruits4.includes("apple"));
console.log(fruits4.includes("grape"));

// forEach(): Executes a provided function once for each array element. It does not return a new array.
// It is primarily used for performing side effects, such as logging values, modifying elements in place, or interacting with the DOM.
const numbers1 = [1, 2, 3];
numbers1.forEach((number) => {
  console.log(number * 2); // Performs an action for each element
});

// map(): Creates a new array by calling a provided function on every element in the original array.
// The original array remains unchanged.
const numbers2 = [1, 2, 3];
const doubledNumbers = numbers2.map((number) => {
  return number * 2; // Transforms each element and returns a new array
});
console.log(doubledNumbers); // [2, 4, 6]
console.log(numbers2); // [1, 2, 3]

// sort(): Sorts the elements of an array in place and returns a reference to the same array, now sorted.
// By default, sort() treats elements as strings and sorts them alphabetically based on their UTF-16 code unit values.
const numbers_int = [25, 100, 10, 40];
const numbers_float = [10.99, 5.99, 3.79, 3.59, 6.59];

numbers_int.sort((a, b) => a - b); // Ascending Order
numbers_float.sort((a, b) => b - a); // Descending Order
console.log(numbers_int); // [10, 25, 40, 100]
console.log(numbers_float); // [10.99, 6.59, 5.99, 3.79, 3.59]

// reverse(): Reverses the order of the elements in an array in place and returns a reference to the same array, now reversed.
const numbers3 = [1, 2, 3, 4, 5];
numbers3.reverse();
console.log(numbers3); // [5, 4, 3, 2, 1]

// filter(): Creates a new array filled with elements that pass a test provided by a function.
let numbers4 = [1, 2, 3, 4, 5];
let evenNumbers = numbers4.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// some(): Checks if at least one element in the array satisfies the condition specified by the callback function.
// Returns true if the callback function returns true for any element; otherwise, returns false.
// Short-circuiting: It stops iterating and returns true as soon as it finds an element that satisfies the condition.
const numbers = [1, 2, 3, 4, 5];
const hasEvenNumber = numbers.some((number) => number % 2 === 0); // true (because 2 and 4 are even)
const hasNumberGreaterThanTen = numbers.some((number) => number > 10); // false

// every(): Checks if all elements in the array satisfy the condition specified by the callback function.
// Returns true only if the callback function returns true for all elements; otherwise, returns false.
// Short-circuiting: It stops iterating and returns false as soon as it finds an element that does not satisfy the condition.
const ages = [20, 25, 30, 35];
const allAdults = ages.every((age) => age >= 18); // true
const allUnderThirty = ages.every((age) => age < 30); // false (because 30 and 35 are not less than 30)

// reduce(): iterates over an array, applying a reducer function to each element, accumulating a single output value.
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 75 },
];

const totalCost = products.reduce((sum, product) => sum + product.price, 0);
console.log(totalCost);
