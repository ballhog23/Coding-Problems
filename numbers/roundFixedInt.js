// Write a function that takes a number (a) as argument.
// Round a to the 2nd digit after the decimal point.
// Return the rounded number

function myFunction(a) {
    const rounded =  a.toFixed(2) // returns string representation of a rounded to 2 decimal places
    return Number(rounded)
}

myFunction(2.12397) // INT 2.12
myFunction(3.136)  // INT 3.14
myFunction(1.12397) // INT 1.12
myFunction(26.1379) // INT 26.14