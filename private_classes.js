class ClassWithPrivateField {
  #privateField;

  constructor() {
    this.#privateField = 42;
  }

  printPrivateMember() {
    console.log("Parent method", this.#privateField);
  }
}

class Subclass extends ClassWithPrivateField {
  #subPrivateField;

  constructor() {
    super();
    this.#subPrivateField = 23;
  }

  printPrivateMember() {
    super.printPrivateMember();
    console.log("Child method", this.#subPrivateField);
  }
}

const obj = new Subclass();
// In some dev tools, it shows Subclass {#privateField: 42, #subPrivateField: 23}
obj.printPrivateMember();
console.log(obj);

console.log("================================================");

// There is a restriction on private static fields: only the class which defines the private static field can access the field.

class ClassWithPrivateStaticField {
  static #privateStaticField = 42;

  static publicStaticMethod() {
    // return ClassWithPrivateStaticField.#privateStaticField;
    return this.#privateStaticField;
  }
}

class ClassWithPrivateStaticFieldSubClass extends ClassWithPrivateStaticField {}

console.log(ClassWithPrivateStaticField.publicStaticMethod()); // 42

// TypeError: Cannot read private member #privateStaticField from an object whose class did not declare it
try {
  ClassWithPrivateStaticFieldSubClass.publicStaticMethod();
} catch (error) {
  console.log(error.message);
}
