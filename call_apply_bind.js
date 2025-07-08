const person = {
  firstName: "John",
  lastName: "Doe",
  getFullname() {
    // `this` keyword is used in this method.
    // `this` points to the `person` object
    return `${this.firstName} ${this.lastName}`;
  },
};

// Lets have a function that takes some parameters used to greet a person
// using the full name (e.g. in English and Spanish)

const greetPerson = function (lang_en, lang_es) {
  console.log(lang_en, lang_es);
  console.log("Hello ", this.getFullname());
  console.log("================================================");
};

// Below code throws TypeError: this.getFullname is not a function
// Its because the `this` points to the global (window) object and
// `getFullname` method does not exist on the global object
// greetPerson();

// Here, we are not invoking the function and then applying .bind() because the function returns a value.
// Instead we use the function as an object and call a method of that object (.bind).
// and then we pass the necessary object to the bind()
// the bind method returns a new function which is actually a copy of the original function.
// When this function is run and its EC is created.
// JS engine sees that this function was created with bind, and uses
// the passed object to determine the `this` value (`this` points to the passed object by reference).

console.log("Using .bind()");
const greetPersonBind = greetPerson.bind(person);
greetPersonBind();
greetPersonBind("English", "Spanish");

// If we want to inoke the `greetPerson` function directly without making a copy

console.log("Using .call()");
greetPerson.call(person);
greetPerson.call(person, "English");
greetPerson.call(person, "English", "Spanish");

console.log("Using .apply()");
greetPerson.apply(person);
greetPerson.apply(person, ["English"]);
greetPerson.apply(person, ["English", "Spanish"]);

console.log("Function borrowing");
const person2 = {
  firstName: "Jane",
  lastName: "Doe",
};

console.log(person.getFullname.apply(person2));
console.log(person.getFullname.call(person2));
