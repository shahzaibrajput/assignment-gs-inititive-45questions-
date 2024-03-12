var myfvtanim = ["Sheep", "Goat", "Rabbit"];
for (var i = 0; i < myfvtanim.length; i++) {
    console.log(myfvtanim[0]);
    console.log(myfvtanim[1]);
    console.log(myfvtanim[2]);
}
for (var i = 0; i < myfvtanim.length; i++) {
    if (myfvtanim[i] == "Sheep") {
        console.log("\n".concat(myfvtanim[i], " Cutest Pet.\n"));
    }
    else if (myfvtanim[i] == "Goat") {
        console.log("".concat(myfvtanim[i], " Loveliest Pet."));
    }
    else if (myfvtanim[i] == "Rabbit") {
        console.log("".concat(myfvtanim[i], " Ferocious Pet."));
    }
}
console.log(myfvtanim[0] + "!  has soft Skin");
console.log(myfvtanim[1] + "!  is a Loyal");
console.log(myfvtanim[2] + "! Beautiful Animal");
console.log("\n All of these Animals are Halal in Islam ");
