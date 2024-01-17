"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        this.age = 30;
        if (this.name) {
            this.name = n;
        }
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let user1;
user1 = new Person("");
console.log(Person);
//# sourceMappingURL=app.js.map