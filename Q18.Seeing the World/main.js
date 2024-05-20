var myPlaces = ["Pakistan", "Saudia Arabia", "Paris", "New York", "Switzerland", "Canada"];
// console.log(myPlaces);
// make a copy of an array
var copyOfArray = myPlaces.slice();
var sortedArray = copyOfArray.sort();
// console.log(sortedArray)
// print original array
// console.log(myPlaces);
// reversing original array
//first we make a copy of original array
var copyOfArray2 = myPlaces.slice();
var reverseOriArray = copyOfArray2.reverse();
// console.log(reverseOriArray)
// now again print orignal array
// console.log(myPlaces);
// reverse the order of original array
var reverseOriArray2 = myPlaces.reverse();
// console.log(reverseOriArray);
var againReverse = reverseOriArray2.reverse();
// console.log(againReverse);
var sortOriArray2 = myPlaces.sort();
console.log(sortOriArray2);
var reverseSortedArray = sortOriArray2.reverse();
console.log(reverseSortedArray);
