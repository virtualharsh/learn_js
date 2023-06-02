// An array of objects
const items = [
    {name:"Colgate", price:50},
    {name:"Book",price:350},
    {name:"Chess",price:200}
]

// using filter to filter out items whose price is greater than 100
const itemsLessThan100 = items.filter((item)=>{
    return item.price > 100
})
console.log(itemsLessThan100);

// using map to create a new array of object property in array 

const priceArray = items.map((item)=>{
    return item.price
})

console.log(priceArray);

// using find function 
const foundItem = items.find((item)=>{
    return item.name==="Book"
})
console.log(foundItem);

// using some function to find whether any item is less than or equal to 100 
// it returns true if any item of an array returns a value


const isInexpensiveLessThan100 = items.some((item)=>{
    // returns true as there is price 50 which is less than 100
    return item.price <= 100
    // if the condition is < 50 it will return false because no item as price less than 50
    // return item.price < 50
})

console.log(isInexpensiveLessThan100);

// using every function that is opposite of some as it only returns true if every item in an array matches the return condition
const isEveryItemLessThan1000 = items.every((item)=>{
    // returns true as every item is less than 1000
    return item.price <= 1000
    // following statement will return false as every item is not less than 100
    // return item.price <= 100
})

console.log(isEveryItemLessThan1000);