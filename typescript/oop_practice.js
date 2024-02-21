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
//ENCAPSULATION
var AbstractCar = /** @class */ (function () {
    /**
     *
     * @param id
     * @param name
     * @param price
     * @param isElectric
     */
    function AbstractCar(id, name, price, isElectric) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.isElectric = isElectric;
    }
    Object.defineProperty(AbstractCar.prototype, "color", {
        get: function () {
            return this._color;
        },
        enumerable: false,
        configurable: true
    });
    AbstractCar.prototype.start = function () {
        console.log("".concat(this.name, " Car started"));
    };
    AbstractCar.prototype.stop = function () {
        console.log("".concat(this.name, " Car stopped"));
    };
    return AbstractCar;
}());
//INHERITANCE
var TicoCar = /** @class */ (function (_super) {
    __extends(TicoCar, _super);
    function TicoCar(id) {
        var _this = _super.call(this, id, "Tico", 10000, false) || this;
        _this.engine = "800cc";
        return _this;
    }
    TicoCar.prototype.calcSpeed = function () {
        return 33;
    };
    TicoCar.prototype.start = function () {
        console.log("Tico class Car started");
        _super.prototype.start.call(this);
    };
    return TicoCar;
}(AbstractCar));
//OBJECT
var ticoCar = new TicoCar(1);
//var ticoCar2 = new TicoCar('2');
console.log(ticoCar);
//console.log(ticoCar2);
// readonly property can't be changed
// ticoCar.name = "Tico2";
//var ticoCar2 = new TicoCar('2'); 
//minor changes
ticoCar.start();
