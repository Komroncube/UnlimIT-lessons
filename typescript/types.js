var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
};
Object.keys(person).forEach(function (key) {
    console.log(key + ': ' + person[key]);
});
