"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_1 = require("console");
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
};
Object.keys(person).forEach(function (key) {
    console.log(key + ': ' + person[key]);
});
(0, console_1.log)('Hello World');
