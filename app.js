const greet = () => {
  console.log("Hi");
};

const showAlert = () => {
  alert("Danger!");
};

setTimeout(showAlert, 2000);

greet();
