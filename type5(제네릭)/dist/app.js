"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "MAX" }, { age: 30 });
console.log(mergedObj.age);
function countAndPrint(element) {
    let Text = "Got no value.";
    if (element.length === 1) {
        Text = "Got 1 element";
    }
    else if (element.length > 1) {
        Text = "Got " + element.length + "element";
    }
    return [element, Text];
}
console.log(countAndPrint("Hi there!"));
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
console.log(extractAndConvert({ name: "max" }, "name"));
class DataStrage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStroage = new DataStrage();
textStroage.addItem("Max");
textStroage.addItem("Manu");
textStroage.removeItem("Max");
console.log(textStroage.getItems());
const numberStroage = new DataStrage();
//# sourceMappingURL=app.js.map