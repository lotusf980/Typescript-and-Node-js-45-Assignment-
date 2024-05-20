function sandwitch() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return "I want sandwitch of ".concat(items);
}
var collection1 = sandwitch("Meat", "Cheese", "Lettuce");
var collection2 = sandwitch("Chicken", "Corned", "Tomato");
var collection3 = sandwitch();
console.log(collection1);
console.log(collection2);
console.log(collection3);
