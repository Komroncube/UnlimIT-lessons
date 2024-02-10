var _a;
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
// console.log(Role['4']);
console.log(Role.SuperAdmin);
var computer = {
    model: 'HP',
    color: 'black',
    price: 1000,
    memory: 16
};
var car = {
    model: 'Ford',
    color: 'red',
    price: 1000,
    year: 2000,
    go: function () {
        console.log('Go');
    }
};
(_a = car.go) === null || _a === void 0 ? void 0 : _a.call(car);
var car2 = {};
car2.model = 'Ford';
var id1 = { id: 5 };
var id2 = { id: '5' };
var id3 = { id: true };
