let usernames:string[]=["Ali","Musa","Alia","Asma","Admin"]

for(let i=0;i<usernames.length;i++){
if(usernames[i]=="Admin"){
    console.log(`\n Hello ${usernames[i]} Would you like to see a status Report! `)

}
else{
    console.log(`Hello!  ${usernames[i]} Thankyou For logging in Again.`)
}
}