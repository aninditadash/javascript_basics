## Table of contents

- [Introduction to Javascript](#introduction-to-javascript)
  - [Syntax Parser](#syntax-parser)
  - [Lexical Environment](#lexical-environment)


## Introduction to Javascript

JavaScript is a lightweight, cross-platform, object-oriented scripting language used to make webpages interactive. It is an interpreted language that executes code line by line, providing more flexibility. It is single-threaded and dynamically typed and is used for client-side or server-side development. JavaScript code is run using the **V8 Engine** in the Chrome browser or **SpiderMonkey** in Firefox, etc. [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model] It provides the following features:

- **Browser Support:** All browsers support JavaScript, as all modern browser comes with the built-in JavaScript execution environment.
- **Dom Manipulation:** JavaScript allows manipulation of the webpage elements, as it contains the various methods to access the DOM elements using different attributes and allows to customize the HTML elements.
- **Client-Side Scripting:** JavaScript runs on the user's browser, so has a faster response time without needing to communicate with the server.
- **Versatile:** JavaScript can be used for a wide range of tasks, from simple calculations to complex server-side applications.
- **Event-Driven Architecture:** JavaScript can respond to user actions (clicks, keystrokes) in real-time.
- **Dynamic Typing:** JavaScript decides the type of variables at runtime. So, no need to specify variable data type while writing the code, providing more flexibility to write code.
- **Functional Programming:** It supports the functional programming. In JavaScript, you can define the first-class function, pure functions, closures, higher-order functions, arrow functions, function expressions, etc.
- **Object-oriented Programming:** JavaScript contains classes, and we can implement object-oriented programming concepts using its functionality.
- **Asynchronous:** As JavaScript is a single-threaded programming language, to execute the code faster, we can use asynchronous programming. For example, JavaScript can handle tasks like fetching data from servers without freezing the user interface.
- **Rich Ecosystem:** There are numerous libraries and frameworks built on JavaScript, such as React, Angular, and Vue.js, which make development faster and more efficient.
- **Server-side Support:** Node.js and frameworks like Express.js are widely used for server-side JavaScript, enabling full-stack development.
- **Dynamic, interpreted, weakly typed language:** Dynamic Typing means that we don't tell the JavaScript engine what type of data a variable holds. Instead, it figures it out while the code is executing, so a single variable can hold different datatypes, at different times during code execution. Weakly typed means the datatypes of the variables are inferred automatically based on the type of value of value stored in it.

### **Syntax Parser**

A program that reads the code and determines what it does and if its grammar is valid. The programs like compilers and interpreters, read the code character by character and determine if the syntax is valid and then implementing that syntax in a way the computer can understand.

### **Lexical Environment**

Where something sits physically in the code we write. Lexical means having to do with words or grammar. A lexical environment exists in programming languges in which where you write something is important. For ex, a function, with a variable defined inside of it. This variable sits lexically inside the function, but lexical environment tells that where this variable sits in the computer's memory and how it will interact with other variables and functions and elements of the program.

### **Script loading strategies**

`<script>` HTML element is used to embed executable code or data, typically used to embed or refer to JavaScript code. The JS script loading strategies determine how and when scripts are fetched and executed in a web page, impacting performance and user experience.

- Scripts without `async`, `defer` or `type="module"` attributes, and inline scripts without `type="module"` attribute, are fetched and executed immediately before the browser continues to parse the page.
- Scripts loaded using the `async` attribute will download the script without blocking the page while the script is being fetched. However, once the download is complete, the script will execute, which blocks the page from rendering. This means that the rest of the content on the web page is prevented from being processed and displayed to the user until the script finishes executing. And there is no guarantee that scripts will run in any specific order. Use `async` when the scripts in the page run independently from each other and depend on no other script on the page.
- Scripts loaded with the `defer` attribute will load in the order they appear on the page. They won't run until the page content has all loaded, which is useful if the scripts depend on the DOM being in place.

<br/>
<img src="https://html.spec.whatwg.org/images/asyncdefer.svg" width=900 height=500 />

#### **Some important JavaScript libraries**

- [Lodash](https://lodash.com/) - https://www.npmjs.com/package/lodash
- [Axios](https://axios-http.com/docs/intro) -https://www.npmjs.com/package/axios

## **How code is parsed and compiled in Javascript**

__Interpreter:__ An interpreter translates code written in a high-level programming language into machine code line-by-line as the code runs.

__Compiler:__  A compiler translates code from a high-level programming language into machine code before the program runs. The file produced by a compiler is often called a binary file or an executable file (byte code).

__JIT Compiler:__ A JIT compiler converts code into byte code first. Then, at runtime, it changes the byte code into machine-readable code, which makes the program run faster.

__Abstract Syntax Tree (AST):__ The AST is a hierarchical, tree-like representation of the code's structure, reflecting its syntax and relationships between different elements.

__Byte Code vs Machine Code (Object code):__

Byte code is an intermediate code between the source code and machine code. It is a low-level code that is the result of the compilation of a source code which is written in a high-level language.

- Byte code is considered as the intermediate-level code and Machine Code as low-level code.
- Byte code is a non-runnable code generated after compilation of source code and it relies on an interpreter to get executed.
- Machine code is a set of instructions in machine language or in binary format and is directly executed by CPU.
- Byte code is platform-independent as it is dependent on the virtual machine and the system having a virtual machine can be executed irrespective of the platform/OS.
- Machine code is not platform-independent because the object code of one platform can not be run on the different OS. Object code varies depending upon system architecture and native instructions associated with the machine.

JavaScript is mainly interpreted, but modern JavaScript engines, like V8 in Google Chrome, use JIT (Just-In-Time) compilation to boost performance. They convert JavaScript code into optimized machine code right before it runs. This mix of interpretation and JIT compilation makes JavaScript fast and versatile for web applications.

- The engine first breaks down the raw JavaScript code into a stream of meaningful "tokens."
- The tokens are then fed to a parser, which analyzes their grammatical structure and builds an AST, which also identifies syntax errors.
- JS engine often uses an interpreter to convert the AST into an intermediate representation called bytecode. This bytecode is a lower-level, platform-independent representation of the code, designed for efficient execution.
- Modern JavaScript engines employ JIT compilation to optimize performance. As the bytecode is executed by the interpreter, the JIT compiler identifies "hot" code sections (frequently executed parts) and compiles them into highly optimized, platform-specific machine code.
- The compiled machine code (or interpreted bytecode for less frequently executed parts) is then executed by the JavaScript virtual machine.

https://daily.dev/blog/javascript-interpreter-basics-for-developers

## **Execution Context**

A wrapper to help manage the code that is running. There are lots of lexical environments, but the one which is currently running is managed via execution contexts.

### **Global Environment and the Global Object**

Whenever code is run in JavaScript, it's run inside an execution context and its the _Base execution context_ created by the JS Engine (here Base is the GEC). By default, when JS code is run (in a browser), the _Global Execution context_ is created which creates two things: a _Global Object_ `window` object and `this` variable which refers to the global window object. When you create variables and functions, and you're not inside a function, those variables and functions get attached to the global object.

### **Execution context - Creation, Hoisting and Execution**

_JavaScript Hoisting_ refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code. 
- The reason JavaScript behaves this way where the variables and functions are to some degree available even though they're written later in the code, is because the execution context is created in two phases.
- The first phase is called the creation phase. In that phase we know that the global object is set up within memory i.e. `window` object and `this` within the global execution context.
- However, there's an outer environment that's created in that creation phase.
- The syntax parser runs through your code and recognizes the variables and functions that are created. So, a memory space is setup for those variables and functions and this step is called as __Hoisting__.
- It's not actually moving code to the top of the page.
- So those functions and variables exist in memory, where the function in its entirety is placed into memory space, where as for the variables, since JavaScript engine doesn't know its value until it starts executing its code, it puts a placeholder called `undefined`.
- All variables in JavaScript are initially set to undefined, and functions are sitting in memory in their entirety.
- The second phase is the execution phase, where the code is run line by line and the variables whose values were undefined in the creation phase are now assigned proper values in memory.

### **Function Invocation and Execution Stack**

```
function b() {}

function a() {
  b();
}

a();
var d;
```
- When above code is put in a JavaScript file, a Global Execution Context will be created along with variable `this` and global object (`window` in case of browser) and attach these functions to it.
- It will set up the memory space for them in the creation phase of the execution context.
- However, when `a()` is invoked, a new execution context is created and placed on top of the execution stack.
- So, anytime a function is executed or invoked in JavaScript, a new execution context is created (goes through creation phase similar to GEC) and put on the execution stack having it's own space for variables and functions including the `this` variable for that execution context.
- So, when `b()` is invoked, yet another execution context is created and placed on top of `a`'s execution context. Here, since `b()` is called inside `a()`, `a`'s execution context is dependent on `b()`'s function completion. 
- When `b()` finishes, then its removed from the execution stack, and same goes for `a()`.
- The order of the code surrounding those functions lexically doesn't matter, e.g. if lexically `a` is above `b`, both of those functions are already in memory during the create phase of the initial GEC.

### **Functions, Execution Context, Variable Environments and the Scope Chain**

```
function b() {
  // var myVar;
  console.log(myVar);
}

function a() {
  var myVar = 2;
  b();
}

var myVar = 1;
a();
```

Variable environment is where the variables live that are created and how they relate to each other in memory. Let's find out the value of `myVar` at any point in time.

- When above code is run, a GEC is created and bottom `myVar` (value = 1) is put into global memory space.
- When `a()` is invoked, a new EC is created and `myVar` (value = 2) is put in that execution context's variable environment.
- So, every EC has its own variable environment, which is created a function is invoked including a reference to the outer environment.
- So, similarly, this process occurs when `b()` is invoked. Here, `myVar` has value `undefined`.
- Now, we have commented `myVar` declaration in `b`, and trying to print its value. When `b()` is invoked, `myVar` is 1, meaning its value is referred from the GEC (so outer environment of `b` is GEC). This is because, lexically `b` sits on top of the global environment (i.e. function declared at global level and not inside `a`).
- This entire act of searching a variable in the chain of references to outer environments, is called the __Scope Chain__. Scope means, where we can access a variable, and the chain is those links of outer environment references. The outer environment is dependent on the Lexical environment, that is where it was physically written in your code.
- However, if `b` was declared inside `a`, then the EC(b)'s reference outer environment will be  `a` and `myVar` will be 2.

## **JavaScript Types**

Primitive data types are the fundamental, predefined data types available in a programming language. They represent single, indivisible values and are the building blocks for more complex data structures. Common primitive types include integers, floating-point numbers, characters, booleans, and strings. Javascript has 7 primitive types:

- String: A sequence of characters that represent a text value.
- Number: Numerical values (integers and floating-point).
- Bigint: Used for very large integers.
- Boolean: true or false.
- Symbol: A data type whose instances are unique and immutable.
- undefined: A top-level property whose value is not defined.
- null: Represents the intentional absence of a value (A special keyword denoting a null value).

##### __Note:__
When trying to assign a value to a JS keyword gives `Syntax Error`.

```
let undefined = 1;
// Uncaught SyntaxError: Identifier 'undefined' has already been declared.
```

### __Primitive vs Reference values__

- Primitive types represent single, simple values and are immutable, meaning their value cannot be changed after creation. When a primitive value is assigned to a variable, the actual value is stored directly in that variable's memory location (typically on the call stack). They are _accessed by Value_. When a primitive variable is copied, a new, independent copy of the value is created. Changes to the copied variable do not affect the original.
- An object is a value in memory which is possibly referenced by an identifier. In JavaScript, objects are the only mutable values. Functions are, in fact, also objects with the additional capability of being callable. Mutable means their properties or elements can be modified after creation. When a reference value is assigned to a variable, the variable stores a reference (a memory address) to the actual object, which is stored in a separate area of memory (typically the heap). These variables are _accessed by Reference_.
- When a reference variable is copied, only the reference (memory address) is copied, not the object itself. This means both the original and copied variables point to the same underlying object in memory. Changes made to the object through one variable will be reflected when accessing the object through the other variable.

## **Memory Management in JavaScript**

JavaScript automatically allocates memory when objects are created and frees it when they are not used anymore (garbage collection). 
The stack is used for static memory allocation (primitives, function calls), while the heap is used for dynamic memory allocation (objects, arrays).

The memory lifecycle can be broken down into three main phases:

1. Memory Allocation: When you create a variable, object, or function, the engine allocates memory to store the value. Primitives data types are stored directly in memory, i.e. typically allocated memory on the stack. For reference data types, the reference to the data is stored in memory, and the actual data is often stored on the heap.
2. Memory Usage: Once memory is allocated, the JavaScript engine uses it as the program runs. When you reference variables, objects, or functions, the engine accesses the memory where the data is stored.
3. Memory Deallocation: When a variable, object, or function is no longer in use, the memory allocated to it should be freed. The JS engine automatically determines when memory is no longer needed and deallocates it.

### **Garbage Collection in JavaScript**

Garbage collection is the automatic process of identifying and freeing memory that is no longer in use by the program.

__References:__ GC algorithms rely mostly on the concept of reference. Within the context of memory management, an object is said to reference another object if the former has access to the latter (either implicitly or explicitly). For instance, a JavaScript object has a reference to its prototype (implicit reference) and to its properties values (explicit reference).

__Reference-counting garbage collection:__ the JavaScript engine keeps track of how many references there are to an object. When the reference count reaches zero (i.e., no part of the program is referencing the object anymore), the object is eligible for garbage collection. There is a limitation when it comes to circular references, e.g. two objects are created with properties that reference one another, thus creating a cycle. After they go out of scope after function is completed, the reference-counting algorithm will not consider them reclaimable since each of the two objects has at least one reference pointing to them, resulting in neither of them being marked for garbage collection. Circular references are a common cause of memory leaks.

__Mark-and-sweep algorithm:__ This algorithm reduces the definition of "an object is no longer needed" to "an object is unreachable". This algorithm assumes the knowledge of a set of objects called roots. In JavaScript, the root is the global object. Periodically, the garbage collector will start from these roots, find all objects that are referenced from these roots, then all objects referenced from these, etc. Starting from the roots, the garbage collector will thus find all reachable objects and collect all non-reachable objects. Its effective in collecting circular references.

### **Data structures aiding memory management**

WeakMaps and WeakSets: are data structures whose APIs closely mirror their non-weak counterparts: Map and Set. WeakMap allows you to maintain a collection of key-value pairs, while WeakSet allows you to maintain a collection of unique values, both with performant addition, deletion, and querying.

WeakMap and WeakSet got the name from the concept of _weakly held_ values. If `x` is weakly held by `y`, it means that although you can access the value of `x` via `y`, the mark-and-sweep algorithm won't consider `x` as reachable if nothing else _strongly holds_ to it.

## __Type Coercion vs Type Conversion__

Coercion in JavaScript refers to the automatic or implicit conversion of values from one data type to another. This process occurs when an operation or function requires a certain data type, but the provided value is of a different type. JavaScript, being a weakly-typed language, handles these conversions automatically to facilitate operations between different data types. 

__Implicit Coercion (Implicit Type casting):__ automatic conversion of one data type to another by JavaScript during operations, like comparison and arithmetic operations. It can lead to unexpected results if not handled properly.

```
let result = 5 + "9"; // The number 5 is implicitly coerced to the string "5"
console.log(result); // Output: "59"
```

__Explicit Coercion (or Type Conversion):__ data type of the variables is converted from one type to another type manually using built-in functions or constructors.

```
let strNumber = "123";
let num = Number(strNumber); // Explicitly converting a string to a number
console.log(num); // Output: 123
console.log(typeof num); // Output: "number"

let value = 0;
let booleanValue = Boolean(value); // Explicitly converting a number to a boolean
console.log(booleanValue); // Output: false
```

### **Common Issues of Type Coercion**

- __Comparing Different Data Types:__ Comparison Operator(==), allows coercion due to which the unexpected conversions occur. To avoid this, we should use the strict equality(===) operator.

```
console.log(0 == "0");  // true
console.log(0 == false);  // true
console.log(" " + 0 == 0); // true
```

- __Operations on null and undefined:__ Null and undefined behave unexpectedly.

```
console.log(null == undefined);   // true
console.log(null === undefined);  // false
console.log(null + 1); // 1
console.log(false == 0); // true
console.log(null == 0); // false, but Number(null) = 0 and Boolean(null) = false
```

- __NaN Comparisons:__ NaN is not equal to itself, so checking with isNaN() is the best way to detect it.

```
console.log(NaN == NaN);  // false
console.log(isNaN(NaN));  // true
```

## **Variable Declarations in Javascript**

#### __var__
Declares variables with function or global scope and allows re-declaration and updates within the same scope. 
- It can be declared without initialization.
- It can be accessed without initialization as its default value is "undefined" (except in _strict mode_).
- These variables are hoisted.

#### __let (ES6)__
Declares variables with block scope, allowing updates but not re-declaration within the same block. 
- It can be declared without initialization.
- It cannot be accessed without initialization otherwise it will give 'referenceError'.
- These variables are hoisted but stay in the temporal dead zone until the initialization.

#### __const (ES6)__
Declares block-scoped variables that cannot be reassigned after their initial assignment. 
- It cannot be declared without initialization.
- It cannot be accessed without initialization, as it cannot be declared without initialization.
- These variables are hoisted but stays in the temporal dead zone until the initialization.
- For reference types (objects, arrays, functions) creates an immutable binding to the reference or the memory address (mutable value), not an immutable value. _Immutable Reference means the variable declared cannot be reassigned to a different reference, mutable value means properties of the referenced object or array can be modified_.

### **Temporal Dead Zone (TDZ) and Hoisting in JavaScript**

A temporal dead zone (TDZ) is the area of a block where a variable is inaccessible until its initialization with a value is completed. A block is a pair of braces `{...}` used to group multiple statements. Only applicable to _let_ and _const_.

```
{
  // myVar’s TDZ starts here (at the beginning of this block’s local scope)
  // myVar’s TDZ continues here
  console.log(myVar); // returns ReferenceError because myVar’s TDZ continues here
  let myVar = 1; // myVar’s TDZ ends here
  // myVar’s TDZ does not exist here
  console.log(myVar); // returns 1 because myVar’s TDZ does not exist here
}
```
- TDZ begins when the execution enters the block or scope where a let or const variable is declared.
- TDZ for a specific variable ends when the JS engine encounters its declaration and initializes it with a value.
- If a variable declared with let or const is accessed before its initialization within its scope, a ReferenceError will be thrown.
- Its not applicable to var as they are hoisted and initialized to undefined at the beginning of their function scope, regardless of where they are declared. 

#### **Strict Mode**

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

## **Functions in Javascript**

__Callback Function:__ A function which is passed to another function, to be executed when the other function is finished. So, callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. Two ways in which the callback may be called: 

- _Synchronous callbacks_ are called immediately after the invocation of the outer function, with no intervening asynchronous tasks e.g, callbacks passed to `map()`, `forEach()`, etc, while
- _asynchronous callbacks_ are called at some point later, after an asynchronous operation has completed like `setTimeout()`, `Promise.prototype.then()`, etc.

### **Function declarations**

A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by the name of the function, list of parameters to the function. 

- Parameters are essentially passed to functions by value — so if the code within the body of a function assigns a completely new value to a parameter that was passed to the function, the change is not reflected globally or in the code which called that function.
- When you pass a reference type as a parameter, if the function changes that variable's properties, that change is visible outside the function.
- Function declarations and expressions can be nested, which forms a scope chain.
- Function declarations are hoisted.
- `this` inside a F.D. will refer to the `window` object.

```
function square(number) {
  return number * number;
}
console.log(square(2)); // 4
```

### **Function expressions**

Functions can also be created by a function expression. Such a function can be _anonymous_, _it does not have to have a name_. A function expression always results in a value. Function expressions cant be hoisted, as the variable will have an initial value of undefined. Here, also `this` inside a F.E. will refer to the `window` object.

```
const square = function (number) {
  return number * number;
};
console.log(square(2)); // 4
```

### **Immediately Invoked Function Expressions (IIFE)**

An IIFE is a code pattern that directly calls a function defined as an expression. Instead of saving the function in a variable, the function is immediately invoked. They are executed immediately after they are defined.

```
const num = 2;
const square = (function (number) {
  return number * number;
})(num);
console.log(square); // 4
```

#### **How IIFEs Promote Safe Code**

- Contribute to "safe code" primarily by creating a private scope, which helps prevent global scope pollution and potential naming conflicts.
- Allow for the encapsulation of related code within a self-contained unit.
- Help create closures in JS.
- Used to create private and  public variables and methods.
- An async function expression can be used as an IIFE which runs as soon as it is defined.

### **Arrow Functions**

Arrow functions are a concise syntax for writing functions, introduced in ES6, and they do not bind their own `this` context. Here, JavaScript sets the `this` lexically. This means that the arrow function doesn't create its own execution context but inherits the `this` from the outer function where the arrow function is defined.

```
const square = (number) => number * number;
```

### **Function Parameters**

There are two kinds of parameter syntax: default parameters and rest parameters.

### **Default parameters**

In JavaScript, parameters of functions default to undefined. However, in some situations we can set it to a different default value using default parameters.

```
const multiply = (a, b = 1) => a * b;

console.log(multiply(5)); // 5
```

### **Rest parameters**

The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

```
const multiply = (multiplier, ...theArgs) => {
  return theArgs.map((x) => multiplier * x);
};

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

### **Closures in JavaScript** 

In JavaScript, a closure is the combination of a function and the lexical environment within which that function was declared. This means that a closure allows an inner function to access and remember the variables and parameters of its outer (enclosing) function, even after the outer function has finished executing (_where the inner function "closes over" variables from its outer scope_).

- Closures are not functions themselves, but rather the environment that a function "remembers" when it is created.
- Every function in JavaScript has an associated closure, which is created at the time the function is defined. This closure allows the function to "remember" the variables in its scope at the time of its creation, even if those variables are outside the function's execution context.
- Closures are rely on _lexical scoping_, meaning that a function’s scope is determined by where the function is defined, not where it is executed. This allows inner functions to access variables from their outer function.
- Closures allow a function to keep variables hidden and only accessible within that function.
- Closures are helpful in asynchronous programming because they allow you to keep track of data even after a function has finished running. This is useful when working with timers or server requests, where the function might not run immediately.
- However, excessive use of closures may retain unnecessary references to variables, causing memory issues due to larger memory usage.

### **call(), apply(), and bind() methods in JavaScript**

JavaScript provides the call(), apply(), and bind() methods for setting the `this` context within a function, i.e. these methods used to control the execution context of functions, specifically the value of `this` within the function. 

- The `bind()` method creates a new function (a "bound function") that, when called, has its `this` keyword set to the provided value. It does not immediately invoke the function.

```
const person = { firstName: "Charlie" };

function greet(city, occupation) {
  console.log(
    `Hello, I'm ${this.firstName}. I am from ${city} and work as ${occupation}`
  );
}

const greetFn = greet.bind(person);
greetFn("London", "Engineer"); // Hello, I'm Charlie. I am from London and work as Engineer
```

- The `call()` method immediately invokes a function with a specified this value and arguments provided individually.
- The apply() method is similar to call(), but it takes arguments as an array (or an array-like object).

```
const person = { firstName: "Charlie" };

function greet(city, occupation) {
  console.log(
    `Hello, I'm ${this.firstName}. I am from ${city} and work as ${occupation}`
  );
}

greet.call(person, "London", "Engineer"); // Hello, I'm Charlie. I am from London and work as Engineer
greet.apply(person, ["London", "Engineer"]); // Hello, I'm Charlie. I am from London and work as Engineer
```

### **Function Borrowing**

Function borrowing enables us to use a method from one object and apply it to another object. This can be achieved by invoking a method from one object but setting the this keyword inside the method to point to a different object. This is primarily achieved by explicitly setting the `this` context of the borrowed method to the object on which it is intended to be used.

```
const person = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const person2 = {
  name: "Bob",
};

person.greet.call(person2); // Output: Hello, my name is Bob
```

### **Function Currying**

Function currying is a programming technique to transform a function that takes multiple arguments into a series of functions that take one argument at a time. 

- Currying relies on closures because each of the intermediate functions has access to the arguments passed previously.
- Currying works well with function composition, allowing you to chain multiple curried functions together to create powerful data transformations in a clear and concise manner.

```
function multiply(a, b) {
  return a * b;
}

const multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(5));
```

### **Pure and Impure Functions**

In JavaScript, functions are categorized as pure or impure based on their adherence to two core principles: determinism and lack of side effects.

- __Pure Functions:__ are _Deterministic_, meaning given the same input arguments, a pure function will always produce the exact same output. It does not rely on any external state or variables that might change, and have _No Side Effects_.A side effect is any modification that a function makes to the state of the system or its environment outside of its scope.

```
function add(a, b) {
      return a + b;
}
console.log(add(3, 4));
```

- __Impure Functions:__ is a function that has side effects or does not always return the same output when given the same input. Side effects can include modifying a global variable, changing the state of an object, or making a network request.

```
let oldValue = 7;

function add(newValue) {
      return oldValue += newValue;
}
console.log(add(5));
```

### **Higher Order Functions**

A higher-order function is a function that either takes one or more functions as arguments or returns a function as its result. Essentially, it treats functions as first-class citizens, allowing them to be manipulated like any other data type. This concept is fundamental to functional programming paradigms. e.g. - map(), filter(), reduce(), etc.

## **Objects in Javascript**

JavaScript is designed on an object-based paradigm. An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.

- All objects in JavaScript inherit from at least one other object. The object being inherited from is known as the prototype, and the inherited properties can be found in the prototype object of the constructor.
- JavaScript has a special keyword, this, that you can use within a method to refer to the current object.

### **Object-Oriented JavaScript and Prototypal Inheritance**

__Classical vs Prototypal Inheritance:__ Inheritance refers to passing down characteristics from a parent to a child so that a new piece of code can reuse and build upon the features of an existing one. Classical inheritance, found in languages like Java and C++, relies on _classes as blueprints for creating objects_. Prototypal inheritance, used in JavaScript, allows _objects to inherit directly from other objects (prototypes)_. 

- In JavaScript, each object has an internal link to another object called its _prototype_ (`__proto__`).
- That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.
- By definition, null has no prototype and acts as the final link in this __prototype chain__.
- When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.

### **Functions are Objects**

First-class Function: A programming language is said to have First-class functions when _functions in that language are treated like any other variable_. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

In JavaScript, functions are first-class objects, because they can be passed to other functions, returned from functions, and assigned to variables and properties. They can also have properties and methods just like any other object. What distinguishes them from other objects is that functions can be called.

### **Using object initializers:** 

Also called object literals. Object initializers are expressions, and each object initializer results in a new object being created whenever the statement in which it appears is executed. Identical object initializers create distinct objects that do not compare to each other as equal.

```
const obj = {
  name: "Anne", // property name may be an identifier
  // This is a method called 'greet'
  greet: function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};
```
### **Using a constructor function**

Define the object type by writing a constructor function. A function constructor is a normal function used to construct objects. Create an instance of the object with new.
```
function Person(name) {
  this.name = name;
  this.greet = function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}
const person1 = new Person("Alice");
const person2 = new Person("Bob");
```

In the above code, the `greet()` method is added to every instance of the `Person` object created which takes up memory. Instead, we can add the `greet()` method to the prototype of the `Person` constructor.

### **Defining getters and setters**

A getter is a function associated with a property that gets the value of a specific property. A setter is a function associated with a property that sets the value of a specific property. Together, they can indirectly represent the value of a property. Getters and setters can be either defined within object initializers, or added later to any existing object.

```
const obj = {
  get prop() {
    // getter, the code executed when reading obj.prop
  },
  set prop() {
    // setter, the code executed when setting obj.prop
  },
};
```

Namespace: A container to hold variables and functions. Typically used to keep variables and functions with the same name separate. JS does not have the concept of namespaces.

__Spread Syntax:__ that allows the expansion of an iterable (like an array or string) or an object into individual elements or properties. 

- Spread syntax looks like rest parameters syntax. In a way, spread syntax is the opposite of rest.
- Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.
- It creates a _shallow copy of arrays and objects_.

```
const sum = (x, y, z) => x + y + z;

const numbers = [1, 2, 3];

console.log(sum(...numbers)); // 6
console.log(sum.apply(null, numbers)); // 6
```

__Destructuring Syntax:__ The destructuring syntax is a JavaScript syntax that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. This simplifies the process of accessing specific values within an object or array.

- For both object and array destructuring, there are two kinds of destructuring patterns: _binding pattern_ and _assignment pattern_, with slightly different syntaxes.
- Each destructured property can have a default value.
- The default value is used when the _property is not present, or has value undefined_. It is not used if the property has value null.

```
let a, b, rest;
[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(a, b); //  10, 20
console.log(rest); // [30, 40, 50]
```

__in operator:__ is a boolean operator used to check for the existence of a specified property within an object or its prototype chain. It returns _true if the property is found, and false otherwise_. If the property has a value of undefined, the in operator returns true for that property. It cannot be used to search for values in other collections. To test if a certain value exists in an array, use `Array.prototype.includes()`. For sets, use `Set.prototype.has()`.

```
const car = { make: "Honda", model: "Accord", year: 1998 };
console.log("make" in car); // true

delete car.make;
if (!("make" in car)) {
  car.make = "Suzuki";
}

console.log(car.make); // "Suzuki"
```

## **Classes and Object-Oriented Programming (OOP)**

Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes. Class is just syntactic sugar for the constructor functions.

- In other languages, classes, or constructors, are distinguished from objects, or instances.
- In JavaScript, classes are mainly an abstraction over the existing prototypical inheritance mechanism — all patterns are convertible to prototype-based inheritance.
- Classes are normal JavaScript values, and have their own prototype chains.
- Classes are in fact "special functions", and a class can be defined in two ways: a class expression or a class declaration. 3 key features of classes: Constructor, Instance methods and instance fields, Static methods and static fields.
- Unlike function declarations, class declarations are not hoisted (or, in some interpretations, hoisted but with the temporal dead zone restriction), which means you cannot use a class before it is declared.
- The __constructor method__ is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor".
- __Instance Methods__ are defined on the prototype of each class instance and are shared by all instances. Methods can be plain functions, async functions, generator functions, or async generator functions.
- __Class fields__ are similar to object properties.

### **Static initialization blocks**

Static initialization blocks allow flexible initialization of static properties, including the evaluation of statements during initialization, while granting access to the private scope.

- Multiple static blocks can be declared, and these can be interleaved with the declaration of static fields and methods (all static items are evaluated in declaration order). (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

### **Static methods and fields**

The static keyword defines a static method or field for a class.

- Static properties (fields and methods) are defined on the class itself instead of each instance.
- Static methods are often used to create utility functions for an application, whereas static fields are useful for caches, fixed-configuration, or any other data that doesn't need to be replicated across instances.
- `this` inside static methods refer to the class itself and not the object calling the method.

```
// Declaration
class Rectangle {
  height = 0;
  width;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```
### **Private elements** 

Private elements get created by using a hash # prefix and cannot be legally referenced outside of the class. The privacy encapsulation of these class elements is enforced by JavaScript itself. The only way to access a private element is via dot notation, and you can only do so within the class that defines the private element. 

- However, constructors cannot be private in JavaScript.
- We can have Private class fields and methods
- Private static fields and methods
- Private getters and setters
- Private static getters and setters
- Private fields can only be declared up-front in a field declaration. They cannot be created later through assigning to them, the way that normal properties can.

```
class Rectangle {
  #height = 0;
  #width;
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }
}
```
### **Inheritance**

The extends keyword is used in class declarations or class expressions to create a class as a child of another constructor (either a class or a function).
If there is a constructor present in the subclass, it needs to first call `super()` before using `this`. The `super` keyword can also be used to call corresponding methods of super class.

#### **Evaluation order**

When a class declaration or class expression is evaluated, its various components are evaluated in the following order:

- The extends clause, if present, is first evaluated. It must evaluate to a valid constructor function or null, or a TypeError is thrown.
- The class elements' property keys are evaluated in the order of declaration.
- Instance Methods and accessors are installed in the order of declaration on the prototype property of the current class, and static methods and accessors are installed on the class itself. Private instance methods and accessors are saved to be installed on the instance directly later. (_i.e. methods and accessors are added to the prototype property of the class_)
- The class is now initialized with the prototype specified by extends and implementation specified by constructor.


## **Iterators, Generators and Arrays**

### **Iterators**

In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination, so an iterator is any object which implements the `Iterator protocol` by having a `next()` method that returns an object with two properties: value - _The next value in the iteration sequence._ and done - _This is true if the last value in the sequence has already been consumed. If value is present alongside done, it is the iterator's return value._

- Once created, an iterator object can be iterated explicitly by repeatedly calling next().
- After a terminating value has been yielded additional calls to next() should continue to return `{done: true}`.
- Most common iterator in JavaScript is the Array iterator, which returns each value in the associated array in sequence.

### **Iterables**

An object is iterable if it defines its iteration behavior, such as what values are looped over in a `for...of` construct. In order to be iterable, an object must implement the [Symbol.iterator]() method. This means that the object (or one of the objects up its prototype chain) must have a property with a `Symbol.iterator` key.

- Some built-in types, such as Array or Map, have a default iteration behavior, while other types (such as Object) do not. `String`, `Array`, `TypedArray`, `Map` and `Set` are all built-in iterables.
- It may be possible to iterate over an iterable more than once, or only once.
- Iterables which can iterate only once (such as Generators) customarily return `this` from their [Symbol.iterator]() method, whereas iterables which can be iterated many times must return a new iterator on each invocation of [Symbol.iterator]().

### **Generator functions**

Custom iterators creation requires the need to explicitly maintain their internal state. Generator functions provide a powerful alternative: they allow to define an iterative algorithm by writing a single function whose execution is not continuous. Generator functions are written using the `function*` syntax.

- When called, generator functions do not initially execute their code.
- Instead, they return a special type of iterator, called a Generator.
- When a value is consumed by calling the generator's next method, the Generator function executes until it encounters the yield keyword.
- The function can be called as many times as desired, and returns a new Generator each time.
- Each Generator may only be iterated once.

__Array reduce() Method:__ iterates over an array, applying a reducer function to each element, accumulating a single output value. It takes an initial value and processes elements from left to right, reducing the array to a single result.

- It takes a callback function as its first argument.
- This function is executed for each element in the array and typically takes two main parameters:
  - accumulator (acc): It holds the accumulated value from the previous iterations. In the first iteration, if an initialValue is provided, the accumulator starts with that value. Otherwise, it starts with the first element of the array.
  - currentValue (curr): It represents the current element being processed in the iteration.

__Array.from() Method:__ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

### **Maps**

A Map object is a key/value map that can iterate its elements in insertion order.

- Map allows keys of any data type (including objects, functions, or primitive values), unlike plain objects where keys are typically strings or symbols.
- Map preserves the original insertion order of its elements, meaning iteration over a Map will return elements in the order they were added.
- Map provides dedicated methods for manipulation, such as `set()`, `get()`, `has()`, `delete()`, and `clear()`.

### **Sets**

Set objects are collections of unique values, we can iterate its elements in insertion order. A value in a Set may only occur once; it is unique in the Set's collection. The insertion order corresponds to the order in which each element was inserted into the set by the add() method successfully.

- We can create an Array from a Set using `Array.from` or the `spread syntax`. Also, the Set constructor accepts an Array to convert in the other direction.

## **Meta programming: Proxy and Reflect APIs**

## **Introduction to events**

Events in JavaScript are actions or occurrences within a web page or application that the browser can detect and respond to. These events can be triggered by various sources, including user interactions (e.g., clicks, key presses, mouse movements) or by the browser itself (e.g., page load, image load, form submit).

__Event Handlers:__  To react to an event, attach an event handler (a function) to the element that will be affected by the event. It is a block of code that runs when the event fires. When such a block of code is defined to run in response to an event, we say we are _registering an event handler_. Also, called called event listeners. `addEventListener()` - standard way to attach event handlers, allowing you to specify event type and the function to be called when that event occurs. If you've added an event handler using `addEventListener()`, you can remove it again using the `removeEventListener()` method.

__Event Object:__ When an event occurs, an Event object is passed to the event handler function. This object contains information about the event, such as the target element (`event.target`), the type of event (`event.type`), and coordinates for mouse events.

__Preventing Default Behavior:__ `event.preventDefault()` is a method used within an event handler to stop the default action associated with a specific event from occurring. When certain events, like clicking a link or submitting a form, are triggered, browsers typically perform a default behavior (e.g., navigating to a new URL, refreshing the page). This method helps to override this default behavior and implement custom logic instead.

### **Event bubbling and Event Capturing**

They are two mechanisms of event propagation in the Document Object Model (DOM), describing how events travel through the DOM tree when triggered. In __event bubbling__, the event starts at the target element and then propagates up to its ancestors (parent elements). Conversely, in event capturing, the event starts at the root of the DOM tree and propagates down to the target element. Both capturing and bubbling can be stopped using `event.stopPropagation()` to prevent the event from propagating further. 

- When an event occurs on an element, the event handler associated with that element is triggered first. Then, the event "bubbles up" to its parent element, and so on, until it reaches the root of the document (or the <body> element). e.g. if you click a button inside a div, and both have click event listeners, the button's click event handler will be triggered first, then the div's click event handler.

In __capturing__, the event travels down the DOM tree from the root to the target element. The event handlers attached to the ancestors of the target element are triggered before the event reaches the target itself. 

- If you set a capturing event listener on the <body> and a bubbling listener on a button inside it, the capturing listener will be triggered first, then the bubbling listener.
- Event capture is disabled by default. To enable it you have to pass the `capture` option in `addEventListener()`.

## **Async JavaScript: Promises and Callbacks**

### **Asynchronous Callbacks**

Asynchronous simply means more than one at a time. But JavaScript is synchronous, i.e. executes code a line at a time. However, click events or API calls are the callback functions that run when that event is complete or when that action is complete. Apart from the _Execution Stack (Call Stack)_ where execution contexts are being created and stacked on top of each other when functions are called, there is another list that sits inside the JavaScript engine called the __Event Queue__. This event queue is full of events, notifications of events, HTTP calls, etc. The __Event Loop__ is a continuous process that monitors the event queue and executes tasks, while the __Event Queue__ is a data structure that holds a list of events waiting to be processed.

__Event Queue:__ also known as a callback queue or task queue, stores events or tasks that are waiting to be executed. When an asynchronous operation completes, its associated callback function is added to the event queue. Events are typically added to the queue in a FIFO (First-In, First-Out) manner, meaning the oldest events are processed first. 

__Event Loop:__ The event loop is a continuously running process that constantly checks the event queue for any pending events. In each iteration, the event loop checks if the call stack (where currently executing code resides) is empty. If it is, the event loop takes the next event from the queue and places its associated callback function onto the call stack for execution. It ensures that asynchronous operations don't block the main thread and that callbacks are executed in a non-blocking manner. 

- The Event Queue is looked by the JS engine only after the execution stack is empty. So, any code written at global level will be executed first.
- In case of events, it checks if a particular function should be run when that event was triggered. So it creates the execution context for that function when its called and processes it.

Since, the event queue won't be processed until the execution stack is empty, it isn't really asynchronous, only the browser asynchronously is putting things into the event queue, but the code that is running is still running line by line. This is how _JavaScript handles asynchronous callbacks_.

### **Promise** 

The `Promise` object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future. The eventual state of a pending promise can either be fulfilled with a value or rejected with a reason (error). A Promise is in one of these states:

- pending: initial state, neither fulfilled nor rejected.
- fulfilled/resolved: meaning that the operation was completed successfully.
- rejected: meaning that the operation failed.

<img src="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png" width=600 height=400 />

__Chaining asynchronous tasks:__ A common need is to execute two or more asynchronous operations back to back, where each subsequent operation starts when the previous operation succeeds, with the result from the previous step. When using functions as callbacks, in such scenarios, it will lead to _callback hell_. With promises, we accomplish this by creating a promise chain.

-  `then()` method takes up to two arguments; the first argument is a callback function for the fulfilled case of the promise, and the second argument is a callback function for the rejected case.
-  `catch()` and `finally()` methods call `then()` internally and make error handling less verbose.

__Combining multiple promises:__ There are four composition tools for running asynchronous operations concurrently: `Promise.all()`, `Promise.allSettled()`, `Promise.any()`, and `Promise.race()`.

### **async/await**

async and await in JavaScript provide a more readable and synchronous-looking way to handle asynchronous operations, primarily built on top of Promises.

- The async keyword is placed before a function declaration to designate it as an asynchronous function. An async function implicitly returns a Promise.
- The value returned by an async function will be the resolved value of that Promise. If an async function throws an error, the returned Promise will be rejected with that error.
- The await keyword can only be used inside an async function. await pauses the execution of the async function until a Promise is settled (either resolved or rejected).
- If the awaited Promise resolves, the await expression evaluates to the resolved value of the Promise. If the awaited Promise rejects, the await expression throws the rejected value, which can be caught using a try...catch block.

### **Fetch API**

The Fetch API provides a JavaScript interface for making HTTP requests and processing the responses. It is the modern replacement for `XMLHttpRequest`: unlike XMLHttpRequest, which uses callbacks, Fetch is promise-based and is integrated with features of the modern web such as _service workers and Cross-Origin Resource Sharing (CORS)_.

- The fetch() function returns a Promise which is fulfilled with a Response object representing the server's response.
- We fetch the response body content as JSON by calling the `json()` method of Response.
- GET requests don't have a body, but we can send data to the server by appending it to the URL as a query string,  using `URLSearchParams` to encode the data.

### **Making cross-origin requests**

Whether a request can be made cross-origin or not is determined by the value of the `RequestInit.mode` option. This may take one of three values: cors, same-origin, or no-cors.

- For fetch requests the default value of mode is _cors_, meaning that if the request is cross-origin then it will use the `Cross-Origin Resource Sharing (CORS)` mechanism.
- Setting mode to _same-origin_ disallows cross-origin requests completely.
- Setting mode to _no-cors_ disables CORS for cross-origin requests. This restricts the headers that may be set, and restricts methods to GET, HEAD, and POST.


__How it works for fetch requests:__

- For simple requests (i.e. requests which will always be sent), the server must respond with the correct [Access-Control-Allow-Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin) header or the browser will not share the response with the caller.
- Unlike simple requests, the browser will send a preflighted request to check that the server understands CORS and allows the request, and the real request will not be sent unless the server responds to the preflighted request with the appropriate CORS headers.
- Promise returned by fetch() will reject on some errors (network error or a bad scheme). However, if the server responds with an error like 404, then `fetch()` fulfills with a `Response`, so we have to check the status before we can read the response body.
- The `Response.status` property tells us the numerical status code, and the `Response.ok` property returns true if the status is in the 200 range (common pattern is to check value of ok and throw error if it is false).
