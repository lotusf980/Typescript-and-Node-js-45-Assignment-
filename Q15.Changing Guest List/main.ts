let guestArr:string[]=["Umer","Ayan","Abdullah","Abdul Hadi",];
let canNotAttend :string="Umer"
console.log(canNotAttend+" "+"can not attend the dinner")
let newGuest:string="Hunain"
guestArr[guestArr.indexOf(canNotAttend)]=newGuest
console.log(guestArr)
guestArr.map((items)=>
console.log(`Dear ${items},you are invited to the dinner`))