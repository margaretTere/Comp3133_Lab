import { Customer2 } from "./customer2";

let customer2 = new Customer2("John", "Smith", 30);
customer2.greeter();
let age = customer2.getAge();

console.log(`Returned value: ${age}`);
