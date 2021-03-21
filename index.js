console.log("JavaScript Object Oriented Programming (OOP)");

// OOP is just is style of programming that JavaScrip supports
// Whenever with thin OOP we need to understand the concepts of Objects and Classes
// In real life when we think of an object we can describe it trough characteristics (attribute) and what they can do(methods)
// An analogy to a Class is a blue-print, every object needs a sort of template on which to build after.
// To understand a object we need to take a look into how it was build, thus the description of an object capabilities resides in the Class definition

// --- Object Literal ---

// this is a declaration of an object literal
// this is JavaScript will use the implicit Object Class to create (instantiate) a new object
const car1 = {
  // this is an attribute with the value a number
  nrOfWheels: 4,
  color: "red",
  engine: "diesel",
  runningEngine: false,
  // this is method because it describes a functionality of the object
  turn: function (direction) {
    // the special "this" key word refers to the current object in this case
    // "this" is context sensitive, meaning it may take a different value depending where it is used
    if (this.runningEngine) {
      console.log("The car is turning", direction);
    } else {
      console.log("The car is not running, turn the engine on");
    }
  },
  startEngine: function () {
    console.log(this);
    console.log("The engine is starting");
    this.runningEngine = true;
  },
};

// as you can see if we want to create 2 objects with the same structure and capabilities we need to copy/paste
// we will see in the Classes section below how we can define a blue-print (Class) to ease this process
const car2 = {
  nrOfWheels: 4,
  color: "white",
  engine: "electric",
  runningEngine: false,
  turn: function (direction) {
    if (this.runningEngine) {
      console.log("The car is turning", direction);
    } else {
      console.log("The car is not running, turn the engine on");
    }
  },
  startEngine: function () {
    console.log(this);
    console.log("The engine is starting");
    this.runningEngine = true;
  },
};

// because we use "turn" and "startEngine" as methods when we called them, meaning we add the context of the object
// "this" will refer to the current object for both methods
car1.turn("left");
car1.startEngine();
car1.turn("left");

// --- Classes ---
// a class is similar to function in the sens of defining how something will work, but nothing will happen until you actually use it
// we will define a class that instantiate object similar with the ones above
// it is standard to name a class with in camel case style, ex: "class ThisIsClassName"
class Car {
  // the constructor method is a special method that is called when we instantiate a new Object
  constructor(color, engine) {
    // "__nrOfWheels" is an attribute
    // every object instantiate with this class will have this attribute as well as the value 4
    // when a attribute has "__" in the name it is an industry standard of saying "try not to change the attribute"
    this.__nrOfWheels = 4;

    // "color" attribute will pe present in every object created with this class but its value may differ based on the parameters provided at instantiation
    this.color = color;
    this.engine = engine;
    this.runningEngine = false;
  }

  turn(direction) {
    if (this.runningEngine) {
      console.log("The car is turning", direction);
    } else {
      console.log("The car is not running, turn the engine on");
    }
  }

  startEngine() {
    console.log(this);
    console.log("The engine is starting");
    this.runningEngine = true;
  }
}

// the "new" key word is responsible for instantiating an object
// the attributes next to the Class names ar passed to the constructor method
// even if "car3" and "car4" have the same class after they are created they are different things and have different contexts
const car3 = new Car("yellow", "hybrid");
const car4 = new Car("pink", "petrol");
console.log(car3);
console.log(car3.color);
car3.startEngine();
console.log(car3);
car3.color = "green";
console.log(car3);

console.log(car4);
car4.nrOfDors = 2;
console.log(car4);
console.log(car3);

// is important to understand the distinction between classes and objects
// on is a definition the other is something we can work with
// "color" is an attribute created on the object it is not of the class
console.log(Car.color);

let vehicle;
const typeOfVehicle = "car";
if (typeOfVehicle === "car") {
  vehicle = new Car();
} else {
  vehicle = new Bike();
}

// a Class is hosted like a function because at its core it is a function
// because is hosted we can use it in our code before it is defined
class Bike {}

// in the "carGenerator.js" file we implemented a real world use case for using OOP to build something with JavaScript
// we use a separate file because the concept of "separation of concerns"
// we try to keep the implementation of the CarAuto class away from the usage so the it is easier to follow a code and it is more organized
document.getElementById("generate-car").addEventListener("click", () => {
  console.log("generate car");
  const newCar = new CarAuto();
});