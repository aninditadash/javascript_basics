// Maps
const myMap = new Map();
myMap.set("name", "Alice");
myMap.set(1, "One");
myMap.set({}, "An object key");
myMap.set({ name: "John" }, [{ age: 30, occupation: "Engineer" }]);

console.log(myMap.get("name")); // Alice
console.log(myMap.has(1)); // true
console.log(myMap.keys());
console.log(myMap.values());
console.log(myMap.size);

for (const entry of myMap.entries()) {
  console.log(entry);
}

for (const [key, value] of myMap.entries()) {
  console.log(key, " : ", value);
}

console.log("================================================");

// Sets
const mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add("foo");

console.log(mySet.has(1)); // true
mySet.delete("foo");
mySet.add(2);
mySet.delete("foo");
console.log(mySet.size); // 3

for (const [key, value] of mySet.entries()) {
  console.log(key, " : ", value);
}

// Array and Set Conversion
const myArray = [1, 2, 3, 4, 5, 6, 6];
const mySet2 = new Set(myArray);
console.log(mySet2);

const mySet2Array = Array.from(mySet2);
console.log(mySet2Array);

const mySet2Array2 = [...mySet2];
console.log(mySet2Array2);
