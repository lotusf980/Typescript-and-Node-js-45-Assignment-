// list of five current user
var currentUsers = ["Umer", "Hunain", "Ayan", "Abdullah", "Abdul Hadi", "Manan"];
var newUsers = ["Shayan", "Usman", "Ayan", "Hanan", "Abdullah"];
//  using foreach methode make function
newUsers.forEach(function (newUsers) {
    var newUserLower = newUsers.toLowerCase();
    //  we use some()method
    var userNameTaken = currentUsers.some(function (currentUser) { return currentUser.toLowerCase() === newUserLower; });
    // we apply now conditions
    if (userNameTaken) {
        console.log("".concat(newUsers, " needs to choose a new username because it's already taken"));
    }
    else {
        console.log("".concat(newUsers, " is the new member added"));
        currentUsers.push(newUsers);
    }
});
console.log(currentUsers);
