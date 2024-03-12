var usernames = ["Ali", "Musa", "Alia", "Asma", "Admin"];
for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] == "Admin") {
        console.log("\n Hello ".concat(usernames[i], " Would you like to see a status Report! "));
    }
    else {
        console.log("Hello!  ".concat(usernames[i], " Thankyou For logging in Again."));
    }
}
