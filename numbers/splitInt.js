// Write a function that takes a number (a) as argument.
// Split a into its individual digits and return them in an array.
// Hint: you might want to change the type of the number for the splitting

function myFunction(a) {
    return a.toString().split('')
}

myFunction(10) // [1,0]
myFunction(931) // [9,3,1]
myFunction(193278) // [1,9,3,2,7,8]