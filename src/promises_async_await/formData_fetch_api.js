// The FormData interface in JavaScript provides a way to construct a set of key/value pairs
// representing form fields and their values, mimicking the behavior of an HTML form submission
// with multipart/form-data encoding.
// This object is particularly useful for sending form data, including files, via
// asynchronous requests like fetch or XMLHttpRequest.

const parentDiv = document.getElementById("body");

const formContainer = document.createElement("form");
formContainer.setAttribute("id", "myForm");
formContainer.setAttribute("action", "/submit-form");
formContainer.setAttribute("method", "post");

const inputElement = document.createElement("input");
inputElement.setAttribute("type", "text");
inputElement.setAttribute("id", "title");
inputElement.setAttribute("name", "title");
inputElement.setAttribute("placeholder", "Enter title");

const labelElement = document.createElement("label");
labelElement.setAttribute("for", "title");
labelElement.textContent = "Title:";

const inputElement2 = document.createElement("input");
inputElement2.setAttribute("type", "text");
inputElement2.setAttribute("id", "body");
inputElement2.setAttribute("name", "body");
inputElement2.setAttribute("placeholder", "Enter body");

const labelElement2 = document.createElement("label");
labelElement2.setAttribute("for", "body");
labelElement2.textContent = "Body:";

const submitButton = document.createElement("input");
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("value", "Submit");

formContainer.appendChild(labelElement);
formContainer.appendChild(inputElement);
formContainer.appendChild(labelElement2);
formContainer.appendChild(inputElement2);
formContainer.appendChild(submitButton);
parentDiv.appendChild(formContainer);

formContainer.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(formContainer);
  formData.append("userId", 1);

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
});
