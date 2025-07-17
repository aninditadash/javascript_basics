// TYPE COERCION

// String Coercion
console.log("5" + 2); // 52
console.log('"5" + true :', "5" + true); // 5true

// Number Coercion
console.log("5" - 2); // 3
console.log("5" * 2); // 10
console.log("10" / "2"); // 5

// Boolean Coercion
console.log(Boolean("hello")); // true
console.log(Boolean(0)); // false
console.log(Boolean([])); // true
console.log(Boolean("")); // false

// null can be coerced to 0, but undefined is coerced as NaN
console.log("Number(null) :", Number(null));
console.log("Number(undefined) :", Number(undefined));
console.log("Boolean(null) :", Boolean(null));

// JavaScript's comparison operators exhibit several notable quirks, primarily stemming from its type coercion rules.
// These quirks can lead to unexpected results if not understood.

// Below code should be true and the JS engine also returns true
// Here, both the < operators have the same precedence, but associativity determines which one is run first
// Associativity for < operator is left-to-right, so first 1 < 2 is executed => true
// Then true < 3 is executed, where true is coerced to 1, 1 < 3 => true
console.log("1 < 2 < 3 :", 1 < 2 < 3);

// Below code should be false, but JS engine returns as true
// Reason: Operator precedence and associativity
// Here, both the < operators have the same precedence, but associativity determines which one is run first
// Associativity for < operator is left-to-right, so first 3 < 2 is executed => false
// Then false < 1 is executed, where false is coerced to 0, 0 < 1 => true
console.log("3 < 2 < 1 :", 3 < 2 < 1);
