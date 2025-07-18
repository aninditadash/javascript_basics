## **JavaScript modules**

Complex projects necessitate a mechanism for splitting JavaScript programs into separate modules that can be imported when needed. In JavaScript, modules are a fundamental feature for organizing, structuring, and reusing code. A module is simply a chunk of code that can be reused in different parts of a program or even in different programs. A module needs to be able to perform a single or a related group of tasks. JavaScript’s modularity is key to managing complexity, especially for large applications. Modules can contain: variables, functions, classes and objects. JavaScript provides two primary module systems: 

__CommonJS Modules:__ In JavaScript, CommonJS is a module system primarily used in NodeJS environments. It helps to break down code into reusable modules by using `module.exports` to export functions, objects, or variables from a module. Other modules can then access these exports using the `require()` function. Modules are loaded synchronously, meaning execution waits until the module is fully loaded before continuing. Each CommonJS module runs in its own scope, preventing variable conflicts and making code modular and reusable.

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
- _Cyclic imports_ arises if `module a` imports `module b`, but `b` directly or indirectly depends on `a`.<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#cyclic_imports>

<br/>

## **Webpack**

Webpack is a static module bundler for modern JavaScript applications. 
When webpack processes an application, it internally builds a dependency graph from one 
or more entry points and then combines every module that the project needs into one or more bundles, which are static assets which serves the content. For more details on setup, refer https://webpack.js.org/guides/getting-started/#basic-setup.

- The `import` and `export` statements have been standardized in ES2015. They are supported in most of the browsers at this moment, however there are some browsers that don't recognize the new syntax.
- Behind the scenes, webpack actually "transpiles" the code so that older browsers can also run it.
- If you are using other ES2015 features, make sure to use a transpiler such as __Babel__ via webpack's loader system.

#### **Entry**

An **entry point** indicates which module webpack should use to begin building out its internal dependency graph. Webpack will figure out which other modules and libraries that entry point depends on (directly and indirectly). By default its value is `./src/index.js`, but we can specify a different (or multiple) entry points by setting an entry property in the `webpack.config.js` file.

#### **Output**

The **output** property tells webpack where to emit the bundles it creates and how to name these files. It defaults to `./dist/main.js` for the main output file and to the `./dist` folder 
for any other generated file. But, it can be configured.

#### **Mode**

By setting the mode parameter to either `development`, `production` or `none`, we can enable webpack's built-in optimizations that correspond to each environment. The _default value is production_.

#### **Plugins**

While loaders are used to transform certain types of modules, plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.

- _HtmlWebpackPlugin_ simplifies creation of HTML files to serve the webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation.
- _TerserWebpackPlugin_ is a Webpack plugin that uses Terser to minify (optimize) JavaScript code during the build process. Primarily used to reduce the size of JavaScript files, leading to faster load times and improved performance in web applications.
- _MiniCssExtractPlugin_ extracts CSS into separate files, enabling features like on-demand loading and improved caching. Typically used in production builds to create individual CSS files for each JavaScript file containing CSS, improving load times and avoiding Flash of Unstyled Content (FOUC). 

#### **Asset Management (Loaders)**

Out of the box, webpack only understands JavaScript and JSON files. Loaders allow webpack to process other types of files and convert them into valid modules that can be consumed by your application and added to the dependency graph.

- In order to import a CSS file from within a JavaScript module, we need to install and add the `style-loader` and `css-loader` to the module configuration.

**`webpack.config.js`**
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
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
  ],
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
```

<br />

## **Caching**

Caching is the process of storing copies of files in a cache, or temporary storage location, so that they can be accessed more quickly. Technically, a cache is any temporary storage location for copies of files or data. Web browsers cache HTML files, JavaScript, and images in order to load websites more quickly, while DNS servers cache DNS records for faster lookups and CDN servers cache content to reduce latency. <https://www.cloudflare.com/learning/cdn/what-is-caching/>

### **Browser caching**

- Every time a user loads a webpage, browser has to download data in order to display that webpage.
- To shorten page load times, browsers cache most of the content that appears on the webpage, saving a copy of the webpage's content on the device’s hard drive (desktop/mobile).
- So, next time when the webpage is loaded, it will be faster as most of the content is already stored locally.
- Browsers store these files until their _time to live (TTL)_ expires or until the hard drive cache is full (TTL is an indication of how long content should be cached). Users can also clear their browser cache if desired.
- Once a browser cache is cleared, every webpage that loads will load as if it is the first time the user has visited the page.

### **CDN caching**

A [CDN](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/), or content delivery network, caches content (such as images, videos, or webpages) in proxy servers that are located closer to end users than origin servers. (A proxy server is a server that receives requests from clients and passes them along to other servers.) Because the servers are closer to the user making the request, a CDN is able to deliver content more quickly. 

- [More details on CDN](https://www.ibm.com/think/topics/content-delivery-networks)
- [Origin server vs CDN Edge servers](https://www.cloudflare.com/learning/cdn/glossary/origin-server/)
- [Client-side-vs-Server-side](https://www.cloudflare.com/learning/serverless/glossary/client-side-vs-server-side/)
- [Cache hit ratio](https://www.cloudflare.com/learning/cdn/what-is-a-cache-hit-ratio/)
- When a user requests content from a website using a CDN, the CDN fetches that content from an origin server, and then saves a copy of the content for future requests.
- Cached content remains in the CDN cache as long as users continue to request it.
- A __cache hit__ is when a client device makes a request to the cache for content, and the cache has that content saved. A cache hit means that the content will be able to load much more quickly, since the CDN can immediately deliver it to the end user.
- A __cache miss__ occurs when the cache does not have the requested content. In this case, a CDN server will pass the request along to the origin server, then cache the content once the origin server responds, so that subsequent requests will result in a cache hit.
- CDN caching servers are located in [data centers](https://www.cloudflare.com/learning/cdn/glossary/data-center/) all over the globe.
- The websites responding to CDN servers with the requested content attach the content’s TTL as well, letting the servers know how long to store it. TTL is stored as part of the HTTP header, specifying how many seconds, minutes, or hours content will be cached.
- When the TTL expires, the cache removes the content. Some CDNs will also purge files from the cache early if the content is not requested for a while, or if a CDN customer manually purges certain content.

<br />

## **Module Federation**



## **ESLint**

https://eslint.org/docs/latest/use/configure/configuration-files
