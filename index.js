console.log("JavaScript OOP Inheritance");

// object literal
// this is instantiated automatically by JavaScript from the implicit class "Object"
const obj = {};

// You can use implicit classes like 'Object"
// this instruction is has the same result like the one from line 5
const a = new Object();
console.log(a);

// b is an instance of implicit class Array
const b = [];

// Car class will be use a base class
// a base class is a class that other classes can inherit functionality from
class Car {
  constructor(color) {
    this.color = color;
  }

  startCar() {
    console.log("Start Car");
  }
}

// the "extends" key word is responsible for adding all the "Car" functionality too the "CarWithElectricWindows"
class CarWithElectricWindows extends Car {
  openElectricWindow(windowNr) {
    console.log("Opening window ", windowNr);
  }
}

const car1 = new Car("white");
console.log(car1);
// the below instruction would throw an error because Car class doesn't have "openElectricWindow" method
// car1.openElectricWindow(2);
const car2 = new CarWithElectricWindows("black");
console.log(car2);
// the line below doesn't trow an error even if "startCar" is not a method from "CarWithElectricWindows" but is inherited from Car
car2.startCar();
car2.openElectricWindow(3);

// You can extend class from implicit class like Array,
class MyArray extends Array {
  printLengthWithJoy() {
    console.log(this.length + " with joy");
  }
}

const myArray1 = new MyArray();
myArray1.push("abc");
myArray1.push("d");
console.log(myArray1);
myArray1.printLengthWithJoy();