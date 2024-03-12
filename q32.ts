import { Console } from "console";

let current_user = ["Ali","Maham","Shia","Saba","fayyaz"]
let new_user = ["ali","ahmed","Mansoor","Tariq","Hussain","maham"]

new_user.forEach(new_user =>{
    let new_userlower = new_user.toLowerCase();

    let userNametaken=current_user.some
    (current_user=>current_user.toLowerCase()===new_userlower);
    if(userNametaken){
        console.log(`${new_user} Needs to choose a new username because its Already Taken`);
 }
 else{
    console.log(` ${new_user} is the member Added. `);
    current_user.push(new_user)
 }
})