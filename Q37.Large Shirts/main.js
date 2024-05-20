// function make_shirt(size:string,label:string){
// return size + label
// }
// let myFunction = make_shirt("large", " I love Typescript");
// console.log(myFunction);
// making large as default
function make_shirt(label, size) {
    if (size === void 0) { size = "Medium"; }
    return size + label;
}
var myFunction = make_shirt("I love Typescript");
console.log(myFunction);
