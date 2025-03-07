"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer2_1 = require("./customer2");
var customer2 = new customer2_1.Customer2("John", "Smith", 30);
customer2.greeter();
var age = customer2.getAge();
console.log("Returned value: ".concat(age));
