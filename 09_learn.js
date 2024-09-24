// class MyDetails {
//   // constructor method
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}`;
//   }
// }

// let myDetails = new MyDetails("Bhavin", 25);
// console.log(myDetails.getDetails()); // Name: Bhavin, Age: 25

// class NewDetails extends MyDetails {
//   constructor(name, age, city) {
//     super(name, age);
//     this.city = city;
//   }
//   getNewDetails() {
//     return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}`;
//   }
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}`;
//   }
// }

// let newDetails = new NewDetails("Bhavin", 25, "Vapi");
// console.log(newDetails.getDetails()); // Name: Bhavin, Age: 25, City: Vapi

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }

  stop() {
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
}

let rabbit = new Rabbit("Black Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
// rabbit.stop(); // White Rabbit stands still. White Rabbit hides!

class Ext {
  #name = "Bhavin";
  constructor(name) {
    this.name = this._name;
  }
  #getName(name) {
    return this.name;
  }

  getnewNan() {
    return this.#getName();
  }
}

let obj = new Ext();
console.log(obj.getnewNan()); // Bhavin
// Private Variable not access out side class #
// Proctatedd will acess _

// It returns true if obj belongs to the Class or a class inheriting from it.

// For instance:

class Rabbits {}
let rabbits = new Rabbits();

// is it an object of Rabbits class?
console.log(rabbits instanceof Rabbits); // true and false that is instance of class or not

class Persons {
  static name = "Bhavin"; //Static Variable
  static age = 25;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static getNameDetails() {
    //static Method
    return `Hello from static method ${this.name}`;
  }

  static setNameDetails(name) {
    //static Method
    return (this.name = name);
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

let persons = new Persons("John", 25);
console.log(persons.getDetails()); // Name: John, Age: 25
console.log(Persons.setNameDetails("Mansi")); // Static Method Calls by Class Name
console.log(Persons.getNameDetails()); //Static Method Calls by Class Name
