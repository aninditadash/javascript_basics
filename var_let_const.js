{
  // Declare a variable:
  let bestFood = "Fish and Chips";

  // Declare another variable:
  let myBestMeal = function () {
    console.log(bestFood);
    let bestFood = "Vegetable Fried Rice";
  };

  // Invoke myBestMeal function:
  myBestMeal();
}

// The code above will return:
// ("Uncaught ReferenceError: Cannot access 'bestFood' before initialization");
// This is because in line 7, bestFood was accessed and then it was again declared in that block
// Since, let has block scope, if in a particular block a variable is accessed before declaration, even if the
// variable is declared at global level, it will throw ReferenceError.
