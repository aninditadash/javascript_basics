const obj = {
  get firstName() {
    return this._firstName;
  },
  set firstName(name) {
    this._firstName = name;
  },
  get lastName() {
    return this._lastName;
  },
  set lastName(name) {
    this._lastName = name;
  },
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

obj._firstName = "John";
obj._lastName = "Doe";
console.log(obj._firstName);
console.log(obj.firstName);
console.log(obj._lastName);
console.log(obj.getFullName());
