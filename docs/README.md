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

## **Overview of HTTP**

[HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview) is a protocol for fetching resources such as HTML documents, it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser. Clients and servers communicate by exchanging individual messages, messages sent by the client are called requests and the messages sent by the server as an answer are called responses.

- __HTTP is stateless, but not sessionless:__ HTTP is stateless: there is no link between two requests being successively carried out on the same connection. However, HTTP cookies allow the use of stateful sessions. Using header extensibility, HTTP Cookies are added to the workflow, allowing session creation on each HTTP request to share the same context, or the same state.


## **Web Storage API**

The Web Storage API provides mechanisms by which browsers can store key/value pairs (instead of using cookies). The two mechanisms within Web Storage:

- __localStorage:__ Provides a larger storage capacity than cookies (typically 5-10MB per origin) and stores data persistently, even after the browser is closed. Data is stored as _key-value pairs_ and is accessible only by the domain that created it. 
- __sessionStorage:__ Similar to localStorage, but data is stored only for the duration of a page session (i.e., until the browser or tab is closed). This is useful for storing temporary data related to a user's current interaction with a website.
- Main difference between Local and Session Storage is that Local Storage will store your data forever.
- Web Storage always stores data as strings, you can store complex data as a JSON string (`JSON.stringify()`), and then convert that string back into an object when you access it (`JSON.parse()`).
- set a new key/value pair using `setItem()` and get it using `getItem()`.

__IndexedDB:__ A more advanced, transactional database that can store structured data, including complex JavaScript objects, and offers a larger storage capacity than localStorage and sessionStorage. It is suitable for storing larger datasets and more complex data structures. 

## **Cross Site Scripting (XSS)**

[Cross-Site Scripting (XSS)](http://owasp.org/www-community/attacks/xss/) attacks are a type of injection, in which malicious scripts are injected into otherwise benign and trusted websites. XSS attacks occur when an attacker uses a web application to send malicious code, generally in the form of a browser side script, to a different end user. These scripts can then execute in the context of the user's browser, potentially allowing attackers to steal session cookies, redirect users to malicious sites, or modify the content of the HTML page. Cross-Site Scripting (XSS) attacks occur when:
 
- Data enters a web application through an untrusted source, most frequently a web request.
- Data is included in dynamic content that is sent to a web user without being validated for malicious content.
- This malicious content sent to the web browser may take the form of a script tags, HTML, or any code that the browser may execute.
- XSS attacks commonly include transmitting private data, like cookies or other session information, to the attacker, redirecting the victim to web content controlled by the attacker, or performing other malicious operations on the user’s machine under the guise of the vulnerable site.

XSS attacks can generally be categorized into three categories: 

- __Reflected XSS:__ The injected script is part of the HTTP request and is reflected back to the user in the server's response. This often occurs through error messages, links or search results. 
-  __Stored XSS:__ The injected script is stored on the server (e.g., in a database or comment section) and the victim then retrieves the malicious script from the server when it requests the stored information.
- __DOM Based XSS:__ here the attack payload is executed as a result of modifying the DOM “environment” in the victim’s browser used by the original client side script, so that the client side code runs in an “unexpected” manner. That is, the page itself (the HTTP response that is) does not change, but the client side code contained in the page executes differently due to the malicious modifications that have occurred in the DOM environment.

### **Defenses against XSS**

- Use output encoding and sanitization to prevent input from becoming executable. When rendering content in the browser, ensure that input is being passed through a sanitization function before being included in the page.
- Use a Content Security Policy (CSP) to tell the browser which JavaScript or CSS resources it should be allowed to execute. 

_Output encoding_ is the process by which characters in the input string that potentially make it dangerous are escaped, so they are treated as text instead of being treated as part of a language like HTML.

_Sanitization_ is the process of removing unsafe features from a string of HTML: for example, <script> tags or inline event handlers.

## **Cross-site request forgery (CSRF)**

In a cross-site request forgery (CSRF) attack, an attacker tricks the user or the browser into making an HTTP request to the target site from a malicious site. The request includes the user's credentials and causes the server to carry out some harmful action, thinking that the user intended it. How CSRF Works:

- A user logs into a website (e.g., a banking site) and their browser stores a session cookie.
- An attacker creates a malicious link or form, often disguised within an email or on a seemingly unrelated website.
- A user, unknowingly, clicks the link or submits the form, which triggers a request to the target website.
- Because the user is already authenticated, their browser automatically includes the session cookie in the malicious request.
- The target website, believing the request is legitimate due to the included cookie, performs the action specified in the malicious request (e.g., transferring money, changing a password).
- CSRF attacks can lead to unauthorized account access, fraudulent transactions, or other malicious actions. 

## **CORS**

[Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS) is an HTTP-header based mechanism and is a security feature implemented by web browsers to control how web pages from one domain can interact with resources from a different domain. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. _Example of a cross-origin request:_ the front-end JavaScript code served from https://domain-a.com uses `fetch()` to make a request for https://domain-b.com/data.json. 

- For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts.
- `fetch()` and `XMLHttpRequest` follow the same-origin policy, meaning that web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.

<img src="https://mdn.github.io/shared-assets/images/diagrams/http/cors/fetching-page-cors.svg" width=700 />

- CORS standard works by adding new HTTP headers that let servers describe which origins are permitted to read that information from a web browser.
- For HTTP request methods that can cause side-effects on server data (other than GET, or POST), the specification mandates that browsers "preflight" the request, soliciting supported methods from the server with the _HTTP OPTIONS_ request method, and then, upon "approval" from the server, sending the actual request.
- Servers can also inform clients whether "credentials" (such as Cookies) should be sent with requests.
- __Simple requests:__ these requests don't trigger a CORS preflight. (GET, HEAD, POST)
- __Preflighted requests:__ Unlike simple requests, for "preflighted" requests the browser first sends an HTTP request using the OPTIONS method to the resource on the other origin, in order to determine if the actual request is safe to send. Such cross-origin requests are preflighted since they may have implications for user data.


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


## **Module Federation**


## **ESLint**

Some useful links: 
- <https://eslint.org/docs/latest/use/configure/configuration-files>
- <https://eslint.org/docs/latest/rules/>
- <https://www.raulmelo.me/en/blog/migration-eslint-to-flat-config>


