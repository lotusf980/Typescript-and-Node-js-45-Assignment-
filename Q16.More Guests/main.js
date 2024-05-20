var guestArr = ["Hunain", "Ayan", "Abdullah", "Abdul Hadi"];
console.log(guestArr);
console.log("we have big dinner table so i invited 3 more guest on dinner");
// Adding 3 more guests
// Add at begining
guestArr.unshift("Umer");
console.log(guestArr);
// Add at middle
guestArr.splice(2, 0, "Usman");
console.log(guestArr);
// Add at last
guestArr.push("Zain");
console.log(guestArr);
// print all guest along with message
for (var i = 0; i < guestArr.length; i++) {
    console.log("Dear ".concat(guestArr[i], " you are invited to the dinner"));
}
