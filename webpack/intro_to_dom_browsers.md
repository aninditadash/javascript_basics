## **Web Storage API**

The Web Storage API provides mechanisms by which browsers can store key/value pairs (instead of using cookies). The two mechanisms within Web Storage:

- __localStorage:__ Provides a larger storage capacity than cookies (typically 5-10MB per origin) and stores data persistently, even after the browser is closed. Data is stored as _key-value pairs_ and is accessible only by the domain that created it. 
- __sessionStorage:__ Similar to localStorage, but data is stored only for the duration of a page session (i.e., until the browser or tab is closed). This is useful for storing temporary data related to a user's current interaction with a website.
- Main difference between Local and Session Storage is that Local Storage will store your data forever.
- Web Storage always stores data as strings, you can store complex data as a JSON string (`JSON.stringify()`), and then convert that string back into an object when you access it (`JSON.parse()`).
- set a new key/value pair using `setItem()` and get it using `getItem()`.

__IndexedDB:__ A more advanced, transactional database that can store structured data, including complex JavaScript objects, and offers a larger storage capacity than localStorage and sessionStorage. It is suitable for storing larger datasets and more complex data structures. 

<br />

## **CORS**



