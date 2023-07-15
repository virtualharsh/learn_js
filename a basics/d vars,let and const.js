// var is globally scoped 
// let is locally scoped 
// const is locally scoped whose value can't be changed

var n = "harsh"

{
    console.log("\n\nvalue of var name inside the block before changing :  " + n)
    var n = "harsh_changed"
    console.log("value of var name inside the block after changing :  " + n)
}
console.log("value of var name outside the block :  " + n)

let surname = "sonegra"

{
    // throws an error because no surname variable is defined in the block
    // console.log("\n\nvalue of let surname inside the block before changing :  " + surname)
    
    let surname = "sonegra_changed"
    console.log("value of let surname inside the block after changing :  " + surname)
}

console.log("value of let surname outside the block :  " + surname)


const character = "temporary"
{
    // same as let the next line throws error because no character variable is defined at the block 
    // console.log(character)
    const character = "temp"
    console.log("\n\nvalue of character variable " + character)

}