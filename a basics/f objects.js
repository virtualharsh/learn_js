const myClass = {
    "enr" : 1,
    "name" : "harsh",
    "surname" : "sonegra",
    "marks" : 73
}

console.log(myClass);
myClass["enr"] = 79
myClass["adhhar"] = 63 
console.log(myClass);
delete myClass["adhhar"]
console.log(myClass);

// we can also access the value of particular key using dot operator
console.log(myClass.enr);