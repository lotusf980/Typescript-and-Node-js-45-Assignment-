let personName:string ="Abdul Hadi"

//In Lowercase
console.log("Lowercase:",personName.toLowerCase())

//In Uppercase
console.log("Uppercase:",personName .toUpperCase())

//In Titlecase
console.log("Titlecase:",personName .replace(/\b\w/g, c=> c.toUpperCase()))