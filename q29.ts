let favt_fruit=["Mango","Banana","Apple","Orange","Peach"];
let fruitavailable="Mango";

if(favt_fruit.includes(fruitavailable)){
    console.log(`I would like to eat Mango! `)
}else if(favt_fruit.includes("Banana")){
    console.log(`I would like to eat Banana`)
}else if(favt_fruit.includes("Apple")){
    console.log(`I would like to eat Apple!`)
}else if(favt_fruit.includes("Orange")){
    console.log(`I would like to eat Orange!`)}
    else if(favt_fruit.includes("Peach")){
        console.log(`I would like to eat Peach!`)}
else{
    console.log(`There is no any Food! `)
}