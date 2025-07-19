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
