function printArray(arr) {
    console.log();
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        console.log(`value:${element}  type: ${typeof(element)}`)
    }
    console.log();
}

function changeArrayAtIndex(arr,position,value) {
    arr[position-1] = value
}

// unlike other static typed languages javascript can hold values of different datatypes in an array
const arr = [1,"harsh",true,BigInt(200)]
printArray(arr)
changeArrayAtIndex(arr,1,"sonegra")
printArray(arr)

// we can create a copy of array with three dots
const copyArr = [...arr]
