"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(nameofcity, nameofcountry) {
    if (nameofcountry === void 0) { nameofcountry = "Pakistan"; }
    return "".concat(nameofcity, " is in ").concat(nameofcountry);
}
var city1 = describe_city("Karachi");
var city2 = describe_city("Hyderbad");
var city3 = describe_city("Moro");
var city4 = describe_city("Moskow", "japan");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
