export class Customer2 {  
    private firstName: string;
    private lastName: string;
    private _age: number;

    constructor(firstName: string, lastName: string, Age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._age = Age;
    }

    greeter(): void {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }

    getAge(): number {
        console.log(`Age: ${this._age}`);
        return this._age;
    }
}
