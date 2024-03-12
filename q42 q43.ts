
function show_magician(magicians:string[]): void {
    for(const magician of magicians){

console.log(magician.charAt(0).toUpperCase() + magician.slice(1))
}
}
const magician:string[]=["ali ","hamza ","Rehman "]
function make_great(magician:string[]):void {
for(let i=0;i<magician.length;i++){
    magician[i]=magician[i] + "The Great"
}
}


make_great(magician)

show_magician(magician)




//q43


function make_great2(magicians:string[]){
    const Greatmagicians:string[]=[];
    for(let i=0;i<magicians.length;i++){
Greatmagicians.push(magicians[i] +  "The Great")
} 
return Greatmagicians;
}
const magician3:string[]=["ali ","hamza ","Rehman "]
const Greatmagician2:string[]=make_great2(magician3);
show_magician(magician3)
show_magician(Greatmagician2)
