let myPlaces:string[]=["Pakistan","Saudia Arabia","Paris","New York","Switzerland","Canada"]
console.log(myPlaces);

// make a copy of an array
let copyOfArray = myPlaces.slice();
let sortedArray = copyOfArray.sort();
console.log(sortedArray)

// print original array
console.log(myPlaces);

// reversing original array
//first we make a copy of original array
let copyOfArray2 =myPlaces.slice();
let reverseOriArray = copyOfArray2.reverse();
console.log(reverseOriArray)

// now again print orignal array
console.log(myPlaces);

// reverse the order of original array
let reverseOriArray2 = myPlaces.reverse()
console.log(reverseOriArray);

let againReverse = reverseOriArray2.reverse()
console.log(againReverse);

let sortOriArray2 =myPlaces.sort();
console.log(sortOriArray2);

let reverseSortedArray =sortOriArray2.reverse();
console.log(reverseSortedArray);