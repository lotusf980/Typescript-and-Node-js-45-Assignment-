var guestArr = ["Umer", "Ayan", "Abdullah", "Abdul Hadi", "Hunain"];
console.log("I am inviting ".concat(guestArr.length, " number of guest to my dinner which are following\n"));
for (var i = 0; i < guestArr.length; i++) {
    console.log("".concat(i + 1, ". ").concat(guestArr[i]));
}
