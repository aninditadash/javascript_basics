const outer = () => {
  let outerVar = "I'm in the outer scope!";
  return () => {
    console.log(outerVar);
  };
};

const closure = outer();
closure();

console.log("================================================");

function buildFunctions() {
  const arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }

  return arr;
}

const fs = buildFunctions();

fs[0](); // 3
fs[1](); // 3
fs[2](); // 3

// Here, the functions which are pushed into the `arr` during the execution of for loop, form closures.
// When, later those functions are executed, the value of `i` is printed.
// Now, since the for loop uses `var` when defining i, and `var` has global/function scope, its value is 3 in memory,
// meaning when the functions are executed later, the for loop has already been executed and
// i's value is now 3 (and all the functions are now pointing to the same value in memory).

console.log("================================================");

function buildFunctions_new() {
  const arr = [];

  for (let i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }

  return arr;
}

const fs_new = buildFunctions_new();

fs_new[0](); // 0
fs_new[1](); // 1
fs_new[2](); // 2

// Here, the functions which are pushed into the `arr` during the execution of for loop, form closures.
// When, later those functions are executed, the value of `i` is printed.
// Now, since the for loop uses `let` when defining i, and `let` has block scope,
// every time the four loop runs, this will be a new variable in memory.
// so, when the functions are executed later, each time they would be pointing at a different spot within that memory.

console.log("================================================");

const tellMeWhenDone = (callback) => {
  let a,
    b = 1; // Some work

  callback();
};

tellMeWhenDone(() => {
  console.log("I am done!");
});
