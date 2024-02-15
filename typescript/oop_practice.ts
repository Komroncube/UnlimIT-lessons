//ABSTRACTION
interface Id<T> {
    id: T;
}
interface IAbstractCar<T> extends Id<T>{
    start(): void;
    stop(): void;
    name:string;
    price:number;
    isElectric:boolean;
}
//CLASS
abstract class Car<T> implements IAbstractCar<T> {
    id: T;
    name: string;
    price: number;
    isElectric: boolean;
    constructor(id: T, name: string, price: number, isElectric: boolean) {
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
class TicoCar<T> extends Car<T> {
    constructor(id: T) {
        super(id, "Tico", 10000, false);
    }
}
//OBJECT
var ticoCar = new TicoCar(1);
var ticoCar2 = new TicoCar('2'); 
//comment
ticoCar.start();