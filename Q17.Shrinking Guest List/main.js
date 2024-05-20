var guestArr = ["Hunain", "Ayan", "Abdullah", "Abdul Hadi", "Umer", "Usman"];
console.log("Dear guest dinner table is not available so i can invited only two persons");
// remove four guest name 
var guest1 = guestArr.pop();
console.log("Sorry Mr.".concat(guest1, " you are not invited to the dinner"));
var guest2 = guestArr.pop();
console.log("Sorry Mr.".concat(guest2, " you are not invited to the dinner"));
var guest3 = guestArr.pop();
console.log("Sorry Mr.".concat(guest3, " you are not invited to the dinner"));
var guest4 = guestArr.pop();
console.log("Sorry Mr.".concat(guest4, " you are not invited to the dinner\n"));
for (var i = 0; i < guestArr.length; i++) {
    console.log("Dear Mr.".concat(guestArr[i], " you are still invited for the dinner"));
}
guestArr.pop();
guestArr.pop();
console.log("\n ".concat(guestArr));
