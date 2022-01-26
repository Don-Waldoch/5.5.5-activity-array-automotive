//this includes the vehicle class as a module
//const VehicleModule = require("./vehicle")
import {Vehicle as vehicleBaseClass} from "./vehicleBaseClass.js";

//this shows how to call from this module...
let v = new vehicleBaseClass("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make);

// Create a Car class that extends the Base Vehicle class
class Car extends vehicleBaseClass {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;   // I changed this to 5 to match my HR-V
        this.passengers = 0;          // Plural passengers made more sense to me
        this.numberOfWheels = 4;      // I can accept this
        this.maximumSpeed = 200;      // I highly doubt my HR-V is capable of this
        this.fuel = 100;              // That's a LOT of gas!
        this.scheduleService = false; // Must have bought it at under 30000 miles
    }

    loadPassengers(num) {
        if (this.passengers + num <= this.maximumPassengers) {
            this.passengers += num;
            return true;
        }
        return false;
    }

    start() {
        if (this.fuel > 0) return true;
        return false;
    }

    // I didn't name this method 'scheduleService' since we already have a
    // property of that name. I called this method 'drive' instead.

    drive(miles) {
        this.mileage += miles;
        if (this.mileage >= 30000) this.scheduleService = true;
        return this.scheduleService;
    }
}

// Let's write some test code.

let hrv = new Car("Honda", "HR-V", 2017, "Green", 29500);
console.log(`You bought a ${hrv.make} ${hrv.model}.`);

if (hrv.loadPassengers(3)) {
    console.log(`You now have ${hrv.passengers} passenger(s) in the car.`);
} else {
    console.log("You can't all fit in the car.");
}

if (hrv.start()) console.log("Vroom vroom");

if (hrv.drive(500)) console.log("Please take your car in for service!");
