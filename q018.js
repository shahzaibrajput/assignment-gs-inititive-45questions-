var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var visit = ["UK", "Romania", "Marakish", "Libya", "Turkey"];
//Q:18 (B)
console.log("Origional: " + visit);
//Q:18 (C)
console.log("Copy: " + __spreadArray([], visit, true).sort());
//Q:18 (D)  Show that your array is still in its original order by printing it.
console.log("Origional: " + visit);
//Q:18 (E)  Print your array in reverse alphabetical order without changing the order of the original list
console.log("Copy: " + __spreadArray([], visit, true).sort().reverse());
//Q:18 (F)
//Show that your array is still in its original order by printing it again
console.log("Copy: " + __spreadArray([], visit, true).sort().reverse());
//Reverse the order of your list. Print the array to show that its order has changed1
console.log("Origional: " + visit.sort());
// Reverse the order of your list again. Print the list to show it’s back to its original order
console.log("Origional: " + visit.sort().reverse());
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Origional: " + visit.sort());
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Origional: " + visit.sort().reverse());
