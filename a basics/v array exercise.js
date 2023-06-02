function getLenOfArrayFromUser() {
    return Number.parseInt(prompt("How many number you want to enter ?"))
}

function addElementsToArray(arr,len) {
    let i= 1
    while(i<=len){
        const enteredStr = prompt(`Enter value ${i++}`,"")
        arr.push(Number.parseInt(enteredStr))
    }
}
function getNumberDivisibleBy(arr,divider){
    const arrDivisibleByDivider = arr.filter((i)=>{
        if(i%divider==0)
            return i
    })
    return arrDivisibleByDivider
}

function printArray(arr) {
    console.log(arr);
}

function squareElementsOfArray(arr) {
    const squaredArray = arr.map((i)=>{
        return i**2
    })    
    return squaredArray
}

function main() {
    const arr = []
    let lenGivenByUser = getLenOfArrayFromUser();
    addElementsToArray(arr,lenGivenByUser)
    printArray(arr)
    arrDivisiblebyNumber = getNumberDivisibleBy(arr,5)
    printArray(arrDivisiblebyNumber)
    squaredArray = squareElementsOfArray(arrDivisiblebyNumber)
    printArray(squaredArray)
}main();

