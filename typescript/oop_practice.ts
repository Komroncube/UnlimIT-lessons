//ABSTRACTION
interface Id<T> {
    id: T;
}
interface IAbstractCar {
    start(): void;
    stop(): void;
    name: string;
    price: number;
    isElectric: boolean;
}
//CLASS
//ENCAPSULATION
abstract class AbstractCar implements IAbstractCar {
    id: number;
    readonly name: string;
    price: number;
    isElectric: boolean;
    protected _color?: string;
    abstract engine: string;
    abstract calcSpeed(): number;
    get color() {
        return this._color;
    }
    /**
     * 
     * @param id 
     * @param name 
     * @param price 
     * @param isElectric 
     */
    constructor(id: number, name: string, price: number, isElectric: boolean) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.isElectric = isElectric;
    }
    start() {
        console.log(`${this.name} Car started`);
    }
    stop() {
        console.log(`${this.name} Car stopped`);
    }
}
//INHERITANCE
class TicoCar extends AbstractCar {
    override engine: string;
    override calcSpeed(): number {
        return 33;
    }
    constructor(id: number) {
        super(id, "Tico", 10000, false);
        this.engine = "800cc";
    }
    override start(): void {
        console.log(`Tico class Car started`);
        super.start();
    }
}
//OBJECT
var ticoCar = new TicoCar(1);
//var ticoCar2 = new TicoCar('2');
console.log(ticoCar);
//console.log(ticoCar2);
// readonly property can't be changed
// ticoCar.name = "Tico2";
ticoCar.start();