const arr = [2,4,6,8,10]

// map method
const secondArray = arr.map((value,index)=>{
    console.log(`${value**2} which is present at index ${index} is being return and copied into new array`);
    return value**2
})

console.log(`original array after coping the array using map: ${arr}`);
console.log(`second array after coping the array using map: ${secondArray}`);

// filter method
// let's find square of numbers whose are less than or equal to 50
const arrayLessThan50 = secondArray.filter((val)=>{
    return val < 50 
})

console.log(`array whose values are less than 50 : ${arrayLessThan50} and length is ${arrayLessThan50.length}`)

// reduce method
// this method takes value of first 2 indexs of array and repeatedly call itself with the result and next index

// if the values of 0,1 indexes are there in a and b then it will execute the steps of function addTwo() and call it again for the result of values and the next index which is 2 until the last element of array
function addTwo(a,b){
    return a+b;
}
const sumOfArr = arr.reduce(addTwo)
console.log(sumOfArr);