var userNames = ["Umer", "Ayan", "Admin", "Abdullah", "Abdul Hadi"];
for (var i = 0; i < userNames.length; i++) {
    if (userNames[i] == "Admin") {
        console.log("\nHello ".concat(userNames[i], " Would you like to see a status report?\n"));
    }
    else {
        console.log("Hello ".concat(userNames[i], " Thank you for logging in again!"));
    }
}
