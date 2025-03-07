"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer2 = void 0;
var Customer2 = /** @class */ (function () {
    function Customer2(firstName, lastName, Age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._age = Age;
    }
    Customer2.prototype.greeter = function () {
        console.log("Hello ".concat(this.firstName, " ").concat(this.lastName));
    };
    Customer2.prototype.getAge = function () {
        console.log("Age: ".concat(this._age));
        return this._age;
    };
    return Customer2;
}());
exports.Customer2 = Customer2;
