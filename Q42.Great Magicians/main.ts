let magicianNames = ["Ayan","Abdullah","Abdul Hadi"];

function show_magicians(greet:string){
    for(let item of magicianNames){
        console.log(greet, item);
    }
};

show_magicians("Hello you are a great magician Mr.");
show_magicians("Hello you are a great magicians Mr.");