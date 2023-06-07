// no arguments no return 
function sayHi() {
    console.log("Hii")
}

// with argument no return 
function sayHiToUser(userName){
    console.log("Hi " + userName)
}
// no argument with return
function getName() {
    return "Harsh"
}

// with argument with return
function sumNumbers(a,b) {
    return a+b
}

// there is no concept of function overloading in javascript as the function that is defined after a function with same name overwrites the existing function.
function sumNumbers(a,b,c) {
    return a+b+c
}

// function with variable length argument
function findAverage() {
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum += arguments[i]; 
    }
    return sum/arguments.length;
}

function noArgs(){

}

function defaultArgSumOf2( a , b = 5){
    return a + b;
}

console.log(noArgs());
console.log(defaultArgSumOf2(5,10));
console.log(defaultArgSumOf2(5));
console.log(typeof defaultArgSumOf2(5));

sayHi()
sayHiToUser("Harsh")
console.log(getName());
// following function call will return null value as function that matches the arguments doesn't exist
console.log(sumNumbers(10,20)); 
console.log(sumNumbers(10,20,30));
console.log(findAverage(1,2,3));