let guestArr:string[]=["Hunain","Ayan","Abdullah","Abdul Hadi","Umer","Usman"];
console.log(`Dear guest dinner table is not available so i can invited only two persons`)

// remove four guest name 
let guest1 = guestArr.pop()
console.log(`Sorry Mr.${guest1} you are not invited to the dinner`);

let guest2 = guestArr.pop()
console.log(`Sorry Mr.${guest2} you are not invited to the dinner`);

let guest3 = guestArr.pop()
console.log(`Sorry Mr.${guest3} you are not invited to the dinner`);

let guest4 = guestArr.pop()
console.log(`Sorry Mr.${guest4} you are not invited to the dinner\n`);

for (let i = 0; i <guestArr.length; i++){
    console.log(`Dear Mr.${guestArr[i]} you are still invited for the dinner`)
}

guestArr.pop();
guestArr.pop();

console.log(`\n ${guestArr}`);