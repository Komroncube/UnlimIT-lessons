import { log } from "console";

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
log('Hello World');