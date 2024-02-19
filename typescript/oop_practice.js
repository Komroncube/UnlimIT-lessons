var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//CLASS
var Car = /** @class */ (function () {
    function Car(id, name, price, isElectric) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.isElectric = isElectric;
    }
    Car.prototype.start = function () {
        console.log("".concat(this.name, " Car started"));
    };
    Car.prototype.stop = function () {
        console.log("".concat(this.name, " Car stopped"));
    };
    return Car;
}());
//INHERITANCE
var TicoCar = /** @class */ (function (_super) {
    __extends(TicoCar, _super);
    function TicoCar(id) {
        return _super.call(this, id, "Tico", 10000, false) || this;
    }
    return TicoCar;
}(Car));
//OBJECT
var ticoCar = new TicoCar(1);
var ticoCar2 = new TicoCar('2');
ticoCar.start();
