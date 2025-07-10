const parentDiv = document.getElementById("body");

// Bubbling
const newDiv1 = document.createElement("div");
newDiv1.textContent = "This is the new div for testing Bubbling.";

const newButton = document.createElement("button");
newButton.textContent = "Button 1";
newButton.id = "myNewButton";

const newButton1 = document.createElement("button");
newButton1.textContent = "Button 2";
newButton1.id = "myNewButton1";

newDiv1.appendChild(newButton);
newDiv1.appendChild(newButton1);
parentDiv.appendChild(newDiv1);

parentDiv.addEventListener("click", (event) => {
  console.log("CLICKED BODY (Bubbling)", event);
});

newDiv1.addEventListener("click", (event) => {
  console.log("CLICKED DIV", event);
});

newButton.addEventListener("click", (event) => {
  console.log("CLICKED BUTTON 1", event);
});

newButton1.addEventListener("click", (event) => {
  // Stopping the bubbling event propagation mechanism
  event.stopPropagation();
  console.log("CLICKED BUTTON 2", event);
});

// Capturing
const newDiv2 = document.createElement("div");
newDiv2.textContent = "This is the new div for testing Capturing.";

const newButton2 = document.createElement("button");
newButton2.textContent = "Button 3";
newButton2.id = "myNewButton2";

const newButton3 = document.createElement("button");
newButton3.textContent = "Button 4";
newButton3.id = "myNewButton3";

newDiv2.appendChild(newButton2);
newDiv2.appendChild(newButton3);
parentDiv.appendChild(newDiv2);

parentDiv.addEventListener(
  "click",
  (event) => {
    console.log("CLICKED BODY (Capturing)", event);
  },
  { capture: true }
);

newDiv2.addEventListener(
  "click",
  (event) => {
    console.log("CLICKED DIV", event);
  },
  { capture: true }
);

newButton2.addEventListener("click", (event) => {
  console.log("CLICKED BUTTON 3", event);
});

newButton3.addEventListener("click", (event) => {
  // Stopping the bubbling event propagation mechanism
  event.stopPropagation();
  console.log("CLICKED BUTTON 4", event);
});
