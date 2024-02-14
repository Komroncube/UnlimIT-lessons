var Animal = /** @class */ (function () {
    function Animal() {
    }
    Object.defineProperty(Animal.prototype, "legs", {
        get: function () {
            return this._legs;
        },
        set: function (legs) {
            if (typeof legs === "string") {
                this._legs = parseInt(legs);
            }
            else {
                this._legs = legs;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
var dog = new Animal();
dog.legs = 4;
dog.legs = "4";
dog.name = "Dog";
console.log(dog['name']);
