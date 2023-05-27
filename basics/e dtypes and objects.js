// There are 7 primitive datatypes in javascript

let a = null // null 
let b = 10 // number
let c = 15.5 // number
let d = true // boolean
let e = BigInt(1000) // bigint
let f = undefined // undefined
let f2;
let g = "harsh" // string
let h = Symbol("10") // immutable primitive type 

console.log("The type of a is " + typeof(a));
console.log("The type of b is " + typeof(b));
console.log("The type of c is " + typeof(c));
console.log("The type of d is " + typeof(d));
console.log("The type of e is " + e);
console.log("The type of f and f2 is " + typeof(f) + " and " + typeof(f2));
console.log("The type of g is " + typeof(g));
console.log("The type of h is " + typeof(h));
console.log(h.description);

// undefined is a variable whose value is not assigned and maybe assigned later in program 
// null is a variable whose value is null or empty or unknown value but it is assigned
//  it is primitive datatype

// A value having the data type Symbol can be referred to as a symbol value.Symbol is an immutable primitive value that is unique.
let name1 = Symbol("harsh")
let name2 = Symbol("harsh")
// Though name1 and name2 both contain 'harsh', they are different as they are of the Symbol type.
if(name1==name2){
    console.log("same");
}else{
    console.log("fail");
}

// object is non primitive datatype that is mixture of more than one datatype 
// it has key value pairs
let obj = {
    "enr" : 79,
    "name" : "harsh"
}

console.log(obj);