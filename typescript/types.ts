let person = {
    firstName : "John",
    lastName : "Doe",
    age : 50,
}
type Person = typeof person;

type PersonKeys = keyof Person; // "firstName" | "lastName" | "age"

Object.keys(person).forEach((key) => {
    console.log(key + ': ' +  person[key as PersonKeys]);
});
console.log('Hello World');

//ENUMS
enum Role {
    User = 5,
    Moderator,
    Admin = '4',
}
declare enum Role {
    SuperAdmin = 0
}
let admin = Role.Admin;
console.log(admin); // 4
console.log(Role[5]);
// console.log(Role['4']);
console.log(Role.SuperAdmin);
type RoleKeys = keyof typeof Role;



//INTERFACES
interface IBase {
    model: string;
    color: string;
    name?: string;
    readonly price:number;
}
interface IComputer extends IBase {
    memory: number;
}
interface ICar extends IBase {
    
    year: number;
    go?() : void;
}
let computer : IComputer = {
    model: 'HP',
    color: 'black',
    price: 1000,
    memory: 16
}
let car: ICar = {
    model: 'Ford',
    color: 'red',
    price: 1000,
    year: 2000,
    go() {
        console.log('Go');
    }
}
car.go?.();
type BaseType = {
    model:string;
    color:string;
}

type CarType = {
    go() : string;
} & BaseType;

let car2 : CarType = {} as CarType;
car2.model = 'Ford';
