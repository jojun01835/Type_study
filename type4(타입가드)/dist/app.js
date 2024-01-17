"use strict";
const e1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log("Name : " + emp.name);
    if ("privileges" in emp) {
        console.log("privileges : " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Start Date : " + emp.startDate);
    }
}
printEmployeeInformation(e1);
printEmployeeInformation({ name: "jo", startDate: new Date() });
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Trick {
    drive() {
        console.log("Trick...");
    }
    loadCargo(amount) {
        console.log("Loading Cargo..." + amount);
    }
}
const v1 = new Car();
const v2 = new Trick();
function useVehicle(Vehicle) {
    Vehicle.drive();
    if (Vehicle instanceof Trick) {
        Vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
//# sourceMappingURL=app.js.map