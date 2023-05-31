function printObjectForIn(obj) {
    console.log();
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            console.log(`${key}:${element}`);
        }
    }
}

function printObjectForOf(obj) {
    console.log();
    const arrOfKeys = Object.keys(obj)
    // values function can be also used to extract all the values from object
    // const arrOfValues = Object.values(obj)
    for (const i of arrOfKeys) {
        const element = obj[i];
        console.log(`${i}:${element}`);
    }
}


const obj = {
    "firstName": "Harsh",
    "middleName": "Bharat",
    "lastName": "Sonegra",
    "age": 18
}

printObjectForIn(obj)
printObjectForOf(obj)
