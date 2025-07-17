// in-operator in arrays and objects
// Always specify an object on the right side of the in operator.

// Arrays
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
0 in trees; // returns true
3 in trees; // returns true
6 in trees; // returns false
"bay" in trees; // returns false (you must specify the index number, not the value at that index)
"length" in trees; // returns true (length is an Array property)

// Predefined objects
"PI" in Math; // returns true

// Custom objects
const myCar = { make: "Honda", model: "Accord", year: 1998 };
console.log("make" in myCar); // returns true
console.log("model" in myCar); // returns true

const color1 = new String("green");
console.log("length" in color1); // returns true

const color2 = "coral";
// generates an error (color2 is not a String object)
try {
  "length" in color2;
} catch (error) {
  console.error("An error occurred:", error.message);
}

const dividend = 10;
const divisor = 0; // This will cause a division by zero error

try {
  if (divisor === 0) {
    throw new Error("Cannot divide by zero."); // Manually throw an error
  }
  const result = dividend / divisor;
  console.log("Result:", result);
} catch (error) {
  console.error("An error occurred:", error.message);
} finally {
  console.log("Execution finished.");
}
