var magicianNames = ["Ayan", "Abdullah", "Abdul Hadi"];
function show_magicians(greet) {
    for (var _i = 0, magicianNames_1 = magicianNames; _i < magicianNames_1.length; _i++) {
        var item = magicianNames_1[_i];
        console.log(greet, item);
    }
}
;
show_magicians("Hello you are a great magician Mr.");
show_magicians("Hello you are a great magicians Mr.");
