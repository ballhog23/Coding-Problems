// Write a function that takes a number (a) as argument.
// If a is a whole number (has no decimal place), return true.
// Otherwise, return false.

function myFunctionString(a) {
    // convert a to a string and run a regex seach for any non-digit characters
    // The search() method returns -1 if no match is found, meaning this would be a whole number
    return a.toString().search(/\D/) === -1
}

function myFunctionNumber(a) {
    // take a and subtract it from the floor of a
    // if the result is not 0, then the number is not whole
    return a - Math.floor(a) === 0
}

myFunctionNumber(4) // true
myFunctionNumber(1.123) // false
myFunctionNumber(1048) // true
myFunctionNumber(10.48) // false

myFunctionString(4) // true
myFunctionString(1.123) // false
myFunctionString(1048) // true
myFunctionString(10.48) // false
