## **JavaScript modules**

Complex projects necessitate a mechanism for splitting JavaScript programs into separate modules that can be imported when needed. In JavaScript, modules are a fundamental feature for organizing, structuring, and reusing code. A module is simply a chunk of code that can be reused in different parts of a program or even in different programs. A module needs to be able to perform a single or a related group of tasks. JavaScript’s modularity is key to managing complexity, especially for large applications. Modules can contain: variables, functions, classes and objects. JavaScript provides two primary module systems: 

__CommonJS Modules:__  In JavaScript, CommonJS is a module system primarily used in NodeJS environments. It helps to break down code into reusable modules by using `module.exports` to export functions, objects, or variables from a module. Other modules can then access these exports using the `require()` function. Modules are loaded synchronously, meaning execution waits until the module is fully loaded before continuing. Each CommonJS module runs in its own scope, preventing variable conflicts and making code modular and reusable.

__ES6 module:__ ES6 Modules (ECMAScript Modules) provide a standardized way to structure and organize JavaScript code into separate, reusable modules. Unlike CommonJS, ES6 Modules use the import and export keywords for handling exports and imports. In JavaScript, setting `"type": "module"` in  package.json tells NodeJS to treat `.js` files as ES6 modules, enabling import and export syntax. With ES6 modules, NodeJS expects static import and export statements, which are optimized at compile time, leading to smaller bundles. 

- _Named exports_ let us export several things from a module, giving each one a specific name. They are useful when we need to share multiple functionalities.
- _Default exports_ allow a module to export a single value or entity as the default export. Unlike named exports, which allow you to export multiple values from a module, default exports allow you to export only one value per module.

__Dynamic module loading:__ This allows you to dynamically load modules only when they are needed, rather than having to load everything up front. This new functionality allows you to call `import()` as a function, passing it the path to the module as a parameter. It returns a Promise, which fulfills with a module object giving you access to that object's exports. 

```
import("./modules/myModule.js").then((module) => {
  // Do something with the module.
});
```

```
(async () => {
    const module = await import('./greetModule.js');
    console.log(module.greet('Hello John'));
  })();
```

- Import declarations are hoisted. In this case, it means that the imported values are available in the module's code even before the place that declares them, and that the imported module's side effects are produced before the rest of the module's code starts running.
- _Cyclic imports_ arises if `module a` imports `module b`, but `b` directly or indirectly depends on `a`.[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#cyclic_imports]

<br/>

## **Webpack**

Webpack is a static module bundler for modern JavaScript applications. 
When webpack processes an application, it internally builds a dependency graph from one 
or more entry points and then combines every module that the project needs into one or more bundles, which are static assets which serves the content. For more details on setup, refer https://webpack.js.org/guides/getting-started/#basic-setup.

- The `import` and `export` statements have been standardized in ES2015. They are supported in most of the browsers at this moment, however there are some browsers that don't recognize the new syntax.
- Behind the scenes, webpack actually "transpiles" the code so that older browsers can also run it.
- If you are using other ES2015 features, make sure to use a transpiler such as __Babel__ via webpack's loader system.

#### **Entry**

An **entry point** indicates which module webpack should use to begin building out its internal 
dependency graph. Webpack will figure out which other modules and libraries that entry point depends on (directly and indirectly).
By default its value is `./src/index.js`, but we can specify a different (or multiple) entry points by setting an entry property in the `webpack.config.js` file.

#### **Output**

The **output** property tells webpack where to emit the bundles 
it creates and how to name these files. It defaults to `./dist/main.js` for the main output file and to the `./dist` folder 
for any other generated file. But, it can be configured.

#### **Mode**

By setting the mode parameter to either `development`, `production` or `none`, we can enable webpack's built-in optimizations that correspond to each environment. The _default value is production_.

#### **Plugins**

While loaders are used to transform certain types of modules, plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.


webpack.config.js
```
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  mode: "development",
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
```

#### **Asset Management (Loaders)**

Out of the box, webpack only understands JavaScript and JSON files. Loaders allow webpack to process other types of files and convert them into valid modules that can be consumed by your application and added to the dependency graph.

- In order to import a CSS file from within a JavaScript module, we need to install and add the `style-loader` and `css-loader` to the module configuration.
