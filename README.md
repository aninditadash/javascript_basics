# Introduction to Javascript

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
- **Dynamic, interpreted, weakly typed language:** It is compiled on the fly, i.e. the code is evaluated and executed at runtime (a variable's type can change during runtime). Weakly typed means the datatypes of the variables are inferred automatically based on the type of value of value stored in it.

#### **Syntax Parser**

A program that reads the code and determines what it does and if its grammar is valid. The programs like compilers and interpreters, read the code character by character and determine if the syntax is valid and then implementing that syntax in a way the computer can understand.

#### **Lexical Environment**

Where something sits physically in the code we write. Lexical means having to do with words or grammar. A lexical environment exists in programming languges in which where you write something is important. For ex, a function, with a variable defined inside of it. This variable sits lexically inside the function, but lexical environment tells that where this variable sits in the computer's memory and how it will interact with other variables and functions and elements of the program.

#### **Execution Context**

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
- This entire act of searching a variable in the chain of references to outer environments, is called the Scope Chain. Scope means, where we can access a variable, and the chain is those links of outer environment references. The outer environment is dependent on the Lexical environment, that is where it was physically written in your code.









