function sandwitch(...items : string[]){
    return`I want sandwitch of ${items}`;
}

let collection1 = sandwitch("Meat", "Cheese", "Lettuce");
let collection2 = sandwitch("Chicken", "Corned", "Tomato");
let collection3 = sandwitch();

console.log(collection1);
console.log(collection2);
console.log(collection3);