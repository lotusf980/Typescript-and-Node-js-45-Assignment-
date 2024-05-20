var animalNames = ["Cow", "Sheep", "Goat", "Camel"];
for (var i = 0; i < animalNames.length; i++) {
    console.log(animalNames[i]);
}
for (var i = 0; i < animalNames.length; i++) {
    console.log("".concat(animalNames[i], " is a Domestic Animal"));
}
console.log("All these Animals ".concat(animalNames[0], ", ").concat(animalNames[1], ", ").concat(animalNames[2], ", and ").concat(animalNames[3], " meat is Halal in Islam "));
