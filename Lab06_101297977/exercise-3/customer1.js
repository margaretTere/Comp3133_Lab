"use strict";
class Customer1 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeter() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}
let customer1 = new Customer1("John", "Smith");
customer1.greeter();
