// If the person is less than 2 years old, print a message that the person is a baby.
//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//• If the person is age 65 or older, print a message that the person is an elder.
var person_age = 89;
if (person_age < 2) {
    console.log("You r Baby!");
}
else if (person_age >= 2 && person_age <= 4) {
    console.log("you r a toddler.");
}
else if (person_age >= 4 && person_age <= 13) {
    console.log("You r a Kid! ");
}
else if (person_age >= 13 && person_age <= 20) {
    console.log("You are teenager! ");
}
else if (person_age >= 20 && person_age <= 65) {
    console.log("You are an Adult! ");
}
else {
    console.log("You are an Elder ");
}
