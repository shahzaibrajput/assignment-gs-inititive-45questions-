function show_magician(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log(magician_1.charAt(0).toUpperCase() + magician_1.slice(1));
    }
}
var magician = ["ali ", "hamza ", "Rehman "];
function make_great(magician) {
    for (var i = 0; i < magician.length; i++) {
        magician[i] = magician[i] + "The Great";
    }
}
make_great(magician);
show_magician(magician);
//q43
function make_great2(magicians) {
    var Greatmagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        Greatmagicians.push(magicians[i] + "The Great");
    }
    return Greatmagicians;
}
var magician3 = ["ali ", "hamza ", "Rehman "];
var Greatmagician2 = make_great2(magician3);
show_magician(magician3);
show_magician(Greatmagician2);
