// list of five current user
 let currentUsers :string[] =["Umer","Hunain","Ayan","Abdullah","Abdul Hadi","Manan"];

 let newUsers: string[]=["Shayan","Usman","Ayan","Hanan","Abdullah"];

//  using foreach methode make function
newUsers.forEach(newUsers =>{
     let newUserLower = newUsers.toLowerCase();

    //  we use some()method
    let userNameTaken = currentUsers.some(currentUser => currentUser.toLowerCase() === newUserLower);

    // we apply now conditions
    if(userNameTaken){
        console.log(`${newUsers} needs to choose a new username because it's already taken`);
    }else{
        console.log(`${newUsers} is the new member added`);
        currentUsers.push(newUsers);
    }
});

console.log(currentUsers);