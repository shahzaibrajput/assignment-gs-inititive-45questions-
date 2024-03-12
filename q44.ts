function sandwich(...items:string[]): void{
console.log("SandWich Order: ")
for(let i=0;i<items.length;i++){
console.log(` - ${items}`)
}
}

console.log("Enjoy Your Meal!")
sandwich("Chicken Sandwich","Tomato","Extra Cheese")
sandwich("Club Sandwich","Garlic Bread","Raita")
sandwich("Zinger Sandwich","With Extra Sauce")