var ordNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < ordNumber.length; i++) {
    if (ordNumber[i] == 1) {
        console.log("".concat(ordNumber[i], "st"));
    }
    else if (ordNumber[i] == 2) {
        console.log("".concat(ordNumber[i], "nd"));
    }
    else if (ordNumber[i] == 3) {
        console.log("".concat(ordNumber[i], "rd"));
    }
    else if (ordNumber[i] >= 4 && ordNumber[i] <= 9) {
        console.log("".concat(ordNumber[i], "th"));
    }
}
