var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
};
Object.keys(person).forEach(function (key) {
    console.log(key + ': ' + person[key]);
});
console.log('Hello World');
//ENUMS
var Role;
(function (Role) {
    Role[Role["User"] = 5] = "User";
    Role[Role["Moderator"] = 6] = "Moderator";
    Role["Admin"] = "4";
})(Role || (Role = {}));
var admin = Role.Admin;
console.log(admin); // 4
console.log(Role[5]);
console.log(Role['4']);
