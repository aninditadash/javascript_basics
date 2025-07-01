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

#### **Syntax Parser:**

A program that reads the code and determines what it does and if its grammar is valid. The programs like compilers and interpreters, read the code character by character and determine if the syntax is valid and then implementing that syntax in a way the computer can understand.

#### **Lexical Environment:**

Where something sits physically in the code we write. Lexical means having to do with words or grammar. A lexical environment exists in programming languges in which where you write something is important. For ex, a function, with a variable defined inside of it. This variable sits lexically inside the function, but lexical environment tells that where this variable sits in the computer's memory and how it will interact with other variables and functions and elements of the program.

#### **Execution Context:**

A wrapper to help manage the code that is running. There are lots of lexical environments, but the one which is currently running is managed via execution contexts.

#### **Global Environment and the Global Object:**

Whenever code is run in JavaScript, it's run inside an execution context and its the _Base execution context_ created by the JS Engine. By default, when JS code is run (in a browser), the _Global Execution context_ is created which creates two things: a _Global Object_ `window` object and `this` variable which refers to the global window object. When you create variables and functions, and you're not inside a function, those variables and functions get attached to the global object.










