function make_shirt(size:string,label:string){

    return size + label
}

let myFunction = make_shirt("large", " I love Typescript");
console.log(myFunction);

// making large as default
// function make_shirt(label:string,size:string = "Large"){
//    return size + label
// }

// let myFunction = make_shirt("I love Typescript");
// console.log(myFunction);

// making medium as default
// function make_shirt(label:string,size:string = "Medium"){
    // return size + label
//  }
 
//  let myFunction = make_shirt("I love Typescript");
//  console.log(myFunction);

// making shirt of any size
// function make_shirt(label:string,size:string){
    // return size + label
//  }
 
//  let myFunction = make_shirt( "any size", " I love Typescript");
//  console.log(myFunction);