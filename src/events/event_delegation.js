const parentDiv = document.getElementById("body");

const newDiv = document.createElement("div");
newDiv.textContent = "Div for displaying the list";

const newButton = document.createElement("button");
newButton.textContent = "Button";
newButton.id = "myNewButton";

const ulElem = document.createElement("ul");
ulElem.id = "items-list";

for (let i = 0; i < 10; i++) {
  const liElem = document.createElement("li");
  liElem.id = `items-list-${i}`;

  const h5Item = document.createElement("h5");
  h5Item.textContent = `Item ${i + 1}`;

  const pItem = document.createElement("p");
  pItem.textContent = `Description ${i + 1}`;

  liElem.append(h5Item, pItem);
  ulElem.append(liElem);
}

newDiv.appendChild(newButton);
newDiv.appendChild(ulElem);
parentDiv.appendChild(newDiv);

const ulList = document.querySelector("ul");
ulList.addEventListener("click", (event) => {
  console.log(event.target, event.currentTarget);
  event.target.closest("li").classList.toggle("highlight");

  // Trigger DOM event programmatically
  newButton.click();
});

newButton.addEventListener("click", (event) => {
  console.log("CLICKED BUTTON 1", event);
});
