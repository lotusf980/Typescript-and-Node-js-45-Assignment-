let userNames :string[] =["Umer","Ayan","Abdullah","Admin","Abdul Hadi"];
// remove all member from array
// userNames =[]
// console.log(userNames);


for(let i=0; i< userNames.length; i++){
    if (userNames[i] == "Admin"){
        console.log(`\nHello ${userNames[i]} Would you like to see a status report?\n`)
    }else{
        console.log(`Hello ${userNames[i]} Thank you for logging in again!`)
    }
}