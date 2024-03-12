//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed


let usernames5:string[]=["Eman","Shahzaib","Fayyaz","Noor"];

//usernames5=[];

if(usernames5.length> 0){
for(let i=0;i<usernames5.length;i++){
    if(usernames5[i]=="Eman"){
console.log(`\nHello! ${usernames5[i]} Would you like to See a Status Report.\n`)
    }else{
        console.log(`Hello ${usernames5[i]}  Thankyou for logging in Again.`)
    }
} 

}
else{
    console.log(`We need to Find some Users! `)
}