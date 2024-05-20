let magicianNames = ["Ayan","Abdullah","Abdul Hadi"];

//making a copy of an array
let magicianNamesCopy = [...magicianNames];

function show_magicians(greet:string){
     let withGreetings = "";
    for(let item of magicianNamesCopy){
        withGreetings += `${greet} ${item}\n`;
    }
    return withGreetings;
};
let myGreetings = show_magicians("Hello");
let makeArray = myGreetings.split(`\n`);
console.log(makeArray);
console.log(magicianNames)