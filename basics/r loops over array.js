const arr = [10,20,30,40,50]

// for loop
let sum = 0;
for(let i=0 ; i<arr.length ; i++){
    sum += arr[i];
}
console.log(`sum is ${sum}`);

// for each
sum = 0;
arr.forEach((i)=>{
    sum+= i
})
console.log(`sum is ${sum}`);

// Array .from
let str = "Harsh Sonegra"

// throws an error because str is not an array and forEach can be only used with arrays
// str.forEach((i)=>{
//     console.log(i);
// })
const arrayOfName = Array.from(str)
console.log(arrayOfName);

// This will work as the string is now an array 
// arrayOfName.forEach((i)=>{
    //     console.log(i);
// })


// for of loop
sum = 0
for (const i of arr) {
    sum += i
}
console.log(`sum is ${sum}`);

// for in loop
sum = 0
for (const key in arr) {
    const element = arr[key];
    sum += element
    console.log(`index is ${key} and value is ${element}`);
}
console.log(`sum is ${sum}`);