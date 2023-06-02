// toString, join, pop, push, shift, unshift, delete, concat, reverse , sort, splice, slice

const arr = [10,20,30,40,50]

// To String
let str = arr.toString()
console.log(str)

// join
str = arr.join("-")
console.log(`joined string is ${str} and type is ${typeof(str)}`)

// pop 
let removedElement = arr.pop()
console.log(`removed element is ${removedElement} \nnow array is ${arr}`);

// push 
arr.push(50,60)
console.log(`array after push is ${arr} length is ${arr.length}`);

// shift
removedElement = arr.shift()
console.log(`removed element is ${removedElement} \nnow array is ${arr}`);

// unshift
arr.unshift(10)
console.log(`array after unshift is ${arr} length is ${arr.length}`);

// delete
// note that the length of array is not affected just the value is deleted
delete arr[2]
console.log(`array after deleting ${arr} and length is ${arr.length}`);

// concat 
const newArray = arr.concat([70,80,90,100])
console.log(`new array is ${newArray}`);

// change value of array
arr[2] = 30
console.log(`after modification of array ${arr}`);

// reverse method
arr.reverse()
console.log(arr);

// sort
arr.sort()
console.log(arr);

// the sort function sorts alphabetically
const alphaUnsortedArray = [10, 20, 3, 5,200]
alphaUnsortedArray.sort()
console.log(alphaUnsortedArray);

// if we want to sort by function
let compare = (a,b) =>{
    return a - b
}
alphaUnsortedArray.sort(compare)
console.log(alphaUnsortedArray);

// splice
console.log(arr)
// [ 10, 20, 30, 40, 50, 60 ]
let deletedItemsArray =  arr.splice(2,2,25,35,45)
console.log("Deleted items ",deletedItemsArray);
console.log("Items after deleted ",arr)

// slice
console.log(arr.slice(1,4))

// include
console.log(arr.includes(10));
console.log(arr.includes(90));