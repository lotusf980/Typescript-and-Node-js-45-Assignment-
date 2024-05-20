let guestArr :string[]=["Umer","Ayan","Abdullah","Abdul Hadi","Hunain"];
console.log(`I am inviting ${guestArr.length} number of guest to my dinner which are following\n`);

for(let i=0; i< guestArr.length; i++){
    console.log(`${i+1}. ${guestArr[i]}`);
}