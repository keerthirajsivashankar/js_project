// Hey man! This is your guide to Object-Oriented Programming in JS.
// We'll use the modern 'class' syntax.

console.log("===============================");
console.log("--- 1. The Class (The Blueprint) ---");
console.log("===============================");
// We define a 'class' using the class keyword.
// This covers "Encapsulation" - bundling data (properties)
// and behavior (methods) into one unit.
//

class Car {
  // 1A. The constructor()
  // This is a special method that runs AUTOMATICALLY
  // when you create a new 'instance' of the class (a new car).
  // This is where you set up the object's properties.
  constructor(make, model, year) {
    console.log(`Building a new car: ${make} ${model}`);

    // 1B. 'this' keyword
    // 'this' refers to the NEW OBJECT (the instance) being created.
    // We are setting properties ON that new object.
    this.make = make;
    this.model = model;
    this.year = year;
    this.isEngineOn = false;
  }

  // 1C. Methods (The "Behavior")
  // These are functions defined on the class.
  start() {
    this.isEngineOn = true;
    console.log(`Vroom vroom! The ${this.model}'s engine is on.`);
  }

  drive() {
    if (this.isEngineOn) {
      console.log(`Driving the ${this.make} ${this.model}...`);
    } else {
      console.log("Engine is off. Can't drive.");
    }
  }
}

console.log("\n===============================");
console.log("--- 2. The Instance (The Real Object) ---");
console.log("===============================");
// We use the 'new' keyword to create an 'instance' from our 'class' blueprint.
// This is when the constructor() runs.

const myCar = new Car("Honda", "Civic", 2021);
const yourCar = new Car("Ford", "Mustang", 1969);

// Now we have two separate objects (instances)
console.log("My Car:", myCar);
console.log("Your Car:", yourCar);

// We can call methods on our instances
myCar.start();
myCar.drive();

yourCar.drive(); // Will say engine is off
yourCar.start();
yourCar.drive();

console.log("\n===============================");
console.log("--- 3. Inheritance (The Parent-Child) ---");
console.log("===============================");
// This is where OOP gets really powerful.
// We can create a NEW class that 'extends' an existing class.
// It gets all the properties and methods of the parent!
//

class ElectricCar extends Car {
  // 1. New constructor
  // We need 'make', 'model', 'year' (for the parent)
  // and 'batteryRange' (for this new class)
  constructor(make, model, year, batteryRange) {
    console.log(`Building an ELECTRIC car...`);

    // 2. 'super()'
    // This is a "gotcha" you MUST remember.
    // 'super()' calls the PARENT's constructor.
    // It passes 'make', 'model', 'year' up to the 'Car' constructor.
    super(make, model, year);

    // 3. New property just for this class
    this.batteryRange = batteryRange;
  }

  // 4. Method Overriding (Polymorphism)
  // This is a new 'start' method that OVERRIDES the parent's.
  //
  start() {
    this.isEngineOn = true;
    // Electric cars are silent!
    console.log(`... (Silent) ... The ${this.model}'s electric motor is on.`);
  }

  // 5. New method just for this class
  charge() {
    console.log(`Charging... ${this.batteryRange} mile range.`);
  }
}

console.log("\n--- Creating an Instance of the Child Class ---");
const myTesla = new ElectricCar("Tesla", "Model 3", 2023, 300);

console.log("My Tesla object:", myTesla);

// It can use the parent's method:
myTesla.drive(); // "Engine is off..." (oops, we need to start it)

// It uses its OWN overridden 'start' method:
myTesla.start();

// And NOW it can use the parent's 'drive' method:
myTesla.drive();

// And it can use its OWN new method:
myTesla.charge();

console.log("\n--- 'Polymorphism' in action ---");
// Both are "Cars", but they behave differently
myCar.start(); // "Vroom vroom! The Civic's engine is on."
myTesla.start(); // "... (Silent) ... The Model 3's electric motor is on."
