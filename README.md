## Introduction to Javascript

JavaScript is a lightweight, cross-platform, object-oriented scripting language used to make webpages interactive. It is an interpreted language that executes code line by line, providing more flexibility. It is a single-threaded programming language that we can use for client-side or server-side development. It is a dynamically typed programming language. JavaScript code is run using the **V8 Engine** in the Chrome browser or **SpiderMonkey** in Firefox. It provides the following features:

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

### **How code is parsed and compiled in Javascript**

__Interpreter:__ An interpreter translates code written in a high-level programming language into machine code line-by-line as the code runs.

__Compiler:__  A compiler translates code from a high-level programming language into machine code before the program runs.

__JIT Compiler:__ A JIT compiler converts code into byte code first. Then, at runtime, it changes the byte code into machine-readable code, which makes the program run faster.

__Abstract Syntax Tree (AST):__ The AST is a hierarchical, tree-like representation of the code's structure, reflecting its syntax and relationships between different elements.

#### __Byte Code vs Machine Code (Object code):__
Byte code is an intermediate code between the source code and machine code. It is a low-level code that is the result of the compilation of a source code which is written in a high-level language.
-  Byte code is considered as the intermediate-level code and Machine Code as low-level code.
-  Byte code is a non-runnable code generated after compilation of source code and it relies on an interpreter to get executed.
-  Machine code is a set of instructions in machine language or in binary format and is directly executed by CPU.
- Byte code is platform-independent as it is dependent on the virtual machine and the system having a virtual machine can be executed irrespective of the platform.
- Machine code is not platform independent because the object code of one platform can not be run on the different OS. 

JavaScript is mainly interpreted, but modern JavaScript engines, like V8 in Google Chrome, use JIT (Just-In-Time) compilation to boost performance. They convert JavaScript code into optimized machine code right before it runs. This mix of interpretation and JIT compilation makes JavaScript fast and versatile for web applications.

- The engine first breaks down the raw JavaScript code into a stream of meaningful "tokens."
- The tokens are then fed to a parser, which analyzes their grammatical structure and builds an AST, which also identifies syntax errors.
- JS engine often uses an interpreter to convert the AST into an intermediate representation called bytecode. This bytecode is a lower-level, platform-independent representation of the code, designed for efficient execution.
- Modern JavaScript engines employ JIT compilation to optimize performance. As the bytecode is executed by the interpreter, the JIT compiler identifies "hot" code sections (frequently executed parts) and compiles them into highly optimized, platform-specific machine code.
- The compiled machine code (or interpreted bytecode for less frequently executed parts) is then executed by the JavaScript virtual machine.

https://daily.dev/blog/javascript-interpreter-basics-for-developers

---------

### **Execution Context**

A wrapper to help manage the code that is running. There are lots of lexical environments, but the one which is currently running is managed via execution contexts.

#### **Global Environment and the Global Object**

Whenever code is run in JavaScript, it's run inside an execution context and its the _Base execution context_ created by the JS Engine (here Base is the GEC). By default, when JS code is run (in a browser), the _Global Execution context_ is created which creates two things: a _Global Object_ `window` object and `this` variable which refers to the global window object. When you create variables and functions, and you're not inside a function, those variables and functions get attached to the global object.

#### **Execution context - Creation, Hoisting and Execution**

_JavaScript Hoisting_ refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code. 
- The reason JavaScript behaves this way where the variables and functions are to some degree available even though they're written later in the code, is because the execution context is created in two phases.
- The first phase is called the creation phase. In that phase we know that the global object is set up within memory i.e. `window` object and `this` within the global execution context.
- However, there's an outer environment that's created in that creation phase.
- The syntax parser runs through your code and recognizes the variables and functions that are created. So, a memory space is setup for those variables and functions and this step is called as __Hoisting__.
- It's not actually moving code to the top of the page.
- So those functions and variables exist in memory, where the function in its entirety is placed into memory space, where as for the variables, since JavaScript engine doesn't know its value until it starts executing its code, it puts a placeholder called `undefined`.
- All variables in JavaScript are initially set to undefined, and functions are sitting in memory in their entirety.
- The second phase is the execution phase, where the code is run line by line and the variables whose values were undefined in the creation phase are now assigned proper values in memory.

#### **Function Invocation and Execution Stack**

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

#### **Functions, Execution Context, Variable Environments and the Scope Chain**

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

### **Asynchronous Callbacks**

Asynchronous simply means more than one at a time. But JavaScript, is synchronous, i.e. executes code a line at a time. However, click events or API calls are the callback functions that run when that event is complete or when that action is complete. Apart from the execution stack where execution contexts are being created and stacked on top of each other when functions are called, there is another list that sits inside the JavaScript engine called the __Event Queue__. This event queue is full of events, notifications of events, HTTP calls, etc.

- When the browser, outside the JavaScript engine, has an event that the JS engine should be notified of, it gets placed on the queue. We can listen for that event and have that function handle that event. e.g. a click event.
- At the same time, if an HTTP event occured due to the previous click event, this HTTP event will be added to the queue and will be executed after the click event is processed (as it is a Queue - FIFO).
- The Event Queue is looked by the JS engine only after the execution stack is empty. So, any code written at global level will be executed first. And when the stack is empty, then JavaScript periodically looks at the event queue.
- In case of events, it checks if a particular function should be run when that event was triggered. So it creates the execution context for that function and processes it.

Since, the event queue won't be processed until the execution stack is empty, it isn't really asynchronous, only the browser asynchronously is putting things into the event queue, but the code that is running is still running line by line. This is how _JavaScript handles asynchronous callbacks_.

-----

### **JavaScript Types**

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

#### __Primitive vs Reference values__

- Primitive types represent single, simple values and are immutable, meaning their value cannot be changed after creation. When a primitive value is assigned to a variable, the actual value is stored directly in that variable's memory location (typically on the call stack). They are _accessed by Value_. When a primitive variable is copied, a new, independent copy of the value is created. Changes to the copied variable do not affect the original.
- An object is a value in memory which is possibly referenced by an identifier. In JavaScript, objects are the only mutable values. Functions are, in fact, also objects with the additional capability of being callable. Mutable means their properties or elements can be modified after creation. When a reference value is assigned to a variable, the variable stores a reference (a memory address) to the actual object, which is stored in a separate area of memory (typically the heap). These variables are _accessed by Reference_.
- When a reference variable is copied, only the reference (memory address) is copied, not the object itself. This means both the original and copied variables point to the same underlying object in memory. Changes made to the object through one variable will be reflected when accessing the object through the other variable.

------

### **Memory Management in JavaScript**
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

#### **Data structures aiding memory management**

WeakMaps and WeakSets: are data structures whose APIs closely mirror their non-weak counterparts: Map and Set. WeakMap allows you to maintain a collection of key-value pairs, while WeakSet allows you to maintain a collection of unique values, both with performant addition, deletion, and querying.

WeakMap and WeakSet got the name from the concept of _weakly held_ values. If `x` is weakly held by `y`, it means that although you can access the value of `x` via `y`, the mark-and-sweep algorithm won't consider `x` as reachable if nothing else _strongly holds_ to it.

------

### __Type Coercion vs Type Conversion__

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

#### **Common Issues of Type Coercion**

Comparing Different Data Types: Comparison Operator(= =), allows coercion due to which the unexpected conversions occur. To avoid this, we should use the strict equality(= = =) operator.

```
console.log(0 == "0");  // true
console.log(0 == false);  // true
console.log(" " + 0 == 0); // true
```

Operations on null and undefined: Null and undefined behave unexpectedly.

```
console.log(null == undefined);   // true
console.log(null === undefined);  // false
console.log(null + 1); // 1
console.log(false == 0); // true
console.log(null == 0); // false, but Number(null) = 0 and Boolean(null) = false
```

NaN Comparisons: NaN is not equal to itself, so checking with isNaN() is the best way to detect it.

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

#### **Temporal Dead Zone (TDZ) and Hoisting in JavaScript**

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

## **Objects and Functions in Javascript**

JavaScript is designed on an object-based paradigm. An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.

### **Functions are Objects**

First-class Function: A programming language is said to have First-class functions when _functions in that language are treated like any other variable_. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

In JavaScript, functions are first-class objects, because they can be passed to other functions, returned from functions, and assigned to variables and properties. They can also have properties and methods just like any other object. What distinguishes them from other objects is that functions can be called.

### **Creating new objects**

#### **Using object initializers:** 

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
#### **Using a constructor function**

Define the object type by writing a constructor function. Create an instance of the object with new.
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

Namespace: A container to hold variables and functions. Typically used to keep variables and functions with the same name separate. JS does not have the concept of namespaces.

## **Functions in Javascript**

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

#### **Default parameters**

In JavaScript, parameters of functions default to undefined. However, in some situations we can set it to a different default value using default parameters.

```
const multiply = (a, b = 1) => a * b;

console.log(multiply(5)); // 5
```

#### **Rest parameters**

The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

```
const multiply = (multiplier, ...theArgs) => {
  return theArgs.map((x) => multiplier * x);
};

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

### **Closures in JavaScript** 

In JavaScript, a closure is the combination of a function and the lexical environment within which that function was declared. This means that a closure allows an inner function to access and remember the variables and parameters of its outer (enclosing) function, even after the outer function has finished executing. 

- Closures are not functions themselves, but rather the environment that a function "remembers" when it is created.
- Every function in JavaScript has an associated closure, which is created at the time the function is defined. This closure allows the function to "remember" the variables in its scope at the time of its creation, even if those variables are outside the function's execution context.
- Closures are rely on _lexical scoping_, meaning that a function’s scope is determined by where the function is defined, not where it is executed. This allows inner functions to access variables from their outer function.
- Closures allow a function to keep variables hidden and only accessible within that function.
- However, excessive use of closures may retain unnecessary references to variables, causing memory issues due to larger memory usage.


Spread operator
