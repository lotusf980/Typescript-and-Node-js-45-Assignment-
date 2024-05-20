var guestArr = ["Umer", "Ayan", "Abdullah", "Abdul Hadi",];
var canNotAttend = "Umer";
console.log(canNotAttend + " " + "can not attend the dinner");
var newGuest = "Hunain";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ",you are invited to the dinner"));
});
