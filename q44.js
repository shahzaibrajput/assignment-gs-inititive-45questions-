function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("SandWich Order: ");
    for (var i = 0; i < items.length; i++) {
        console.log(" - ".concat(items));
    }
}
console.log("Enjoy Your Meal!");
sandwich("Chicken Sandwich", "Tomato", "Extra Cheese");
sandwich("Club Sandwich", "Garlic Bread", "Raita");
sandwich("Zinger Sandwich", "With Extra Sauce");
