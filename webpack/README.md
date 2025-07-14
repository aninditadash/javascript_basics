## **Webpack**

Webpack is a static module bundler for modern JavaScript applications. 
When webpack processes an application, it internally builds a dependency graph from one 
or more entry points and then combines every module that the project needs into one or more bundles, 
which are static assets which serves the content.

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


webpack.config.js
```
const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  mode: "development",
};
```
