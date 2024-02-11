class Animal {
    name: string;
    private _legs: number;

    get legs() {
        return this._legs;
    }
    set legs(legs: number|string)
    {
        if (typeof legs === "string") {
            this._legs = parseInt(legs);
        } else {
            this._legs = legs;
        }
    }
}
const dog = new Animal();
dog.legs = 4;
dog.legs = "4";
dog.name = "Dog";
console.log(dog['name']);