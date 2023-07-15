// for loop
for(let i=1 ; i<=10 ; i++){
    console.log(i);
}

let obj = {
    harsh : "sonegra",
    maitri : "nena",
    darshit : "vara",
    jay : "joshi" , 
    tanvi : "bhadiyadra"
}

// for in loop used for traversal of composite data like array and objects.

for (const i in obj) {
    console.log( i + "-> " + obj[i])
}

// for of loop
// used in arrays and strings
for (const i of "Harsh") {
    console.log(i,"")
}
