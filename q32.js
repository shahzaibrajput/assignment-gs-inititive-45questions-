"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var current_user = ["Ali", "Maham", "Shia", "Saba", "fayyaz"];
var new_user = ["ali", "ahmed", "Mansoor", "Tariq", "Hussain", "maham"];
new_user.forEach(function (new_user) {
    var new_userlower = new_user.toLowerCase();
    var userNametaken = current_user.some(function (current_user) { return current_user.toLowerCase() === new_userlower; });
    if (userNametaken) {
        console.log("".concat(new_user, " Needs to choose a new username because its Already Taken"));
    }
    else {
        console.log(" ".concat(new_user, " is the member Added. "));
        current_user.push(new_user);
    }
});
