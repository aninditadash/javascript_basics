// Consider the following an array of objects
const list = [
  {
    id: 1,
    name: "Steve",
    email: "steve@example.com",
  },
  {
    id: 2,
    name: "John",
    email: "john@example.com",
  },
  {
    id: 3,
    name: "Pamela",
    email: "pam@example.com",
  },
  {
    id: 4,
    name: "Liz",
    email: "liz@example.com",
  },
];

// Suppose you want to remove one of the objects if a specific property matches a value, e.g. "John"
const noJohn = list.filter((item) => item.name !== "John");
console.log(noJohn);

/**
[
  { id: 1, name: 'Steve', email: 'steve@example.com' },
  { id: 3, name: 'Pamela', email: 'pam@example.com' },
  { id: 4, name: 'Liz', email: 'liz@example.com' }
]
*/

console.log("================================================");

// A better way is to wrap it into a function and pass the name as an argument
const filterByName = (list, name) => {
  return list.filter((item) => item.name !== name);
};

console.log(filterByName(list, "John"));

console.log("================================================");

// Using Function Currying to change the above filter function
const filtering = (name) => (item) => item.name !== name;

const filterByName1 = (list, name) => {
  return list.filter(filtering(name));
};

console.log(filterByName1(list, "John"));

/**
[
  { id: 1, name: 'Steve', email: 'steve@example.com' },
  { id: 3, name: 'Pamela', email: 'pam@example.com' },
  { id: 4, name: 'Liz', email: 'liz@example.com' }
]
*/
