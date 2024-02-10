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

let admin = Role.Admin;
console.log(admin); // 4
console.log(Role[5]);
console.log(Role['4']);

type RoleKeys = keyof typeof Role;
