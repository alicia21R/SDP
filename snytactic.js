/*  class is a “syntax sugar” (syntax that is designed to make things easier to read, but doesn’t introduce anything new)
 in JavaScript, because we could actually declare the same without class keyword at all:*/


//code without using the class keyword
function Drive (car) {
    this.car= car;
  }
  
  Drive.prototype.model = function() {
    console.log(this.car);
  };
  
  let car = new Drive("porshe");
  car.model();



  //using the class keyword
  class Car {
    constructor(model){
        this.model = model
    }
}
const car1 = new Car ( 'Range Rover')

console.log(car1);


