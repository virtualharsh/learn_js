// String can be assigned with double and single quotes

let str = "HARSH"
console.log(str);
console.log(str.length);

// String can be also sliced with index
console.log(str[2]);
// strings are immuatable so value can't be changed at particular index
str[2] = 'r'
console.log(str[2]);

// String interpolation
// we can use values of variable in a string with the use of backtick at the time of assigning the literal of string
// this is called string interpolation or template literals

let hiUserMessage = `hello ${str} good morning !`
console.log(hiUserMessage);