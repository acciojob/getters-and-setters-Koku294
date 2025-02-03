class Person {
  // Constructor to initialize name and age
  constructor(name, age) {
    this._name = name;  // Private property for name
    this._age = age;    // Private property for age
  }

  // Getter for the name property
  get name() {
    return this._name;
  }

  // Setter for the age property
  set age(age) {
    this._age = age;
  }

  // Getter for the age property
  get age() {
    return this._age;
  }
}

class Student extends Person {
  // Method specific to Student class
  study() {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  // Method specific to Teacher class
  teach() {
    console.log(`${this.name} is teaching`);
  }
}
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
