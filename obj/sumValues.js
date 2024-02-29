// Write a function that takes an object (a) as argument.
// Return the sum of all object values.

// Object.values() returns an array of the objects values
// this allows us to reduce the values into an overall sum

function myFunction(a) {
    return Object.values(a).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}

myFunction({a:1,b:2,c:3}) // 6
myFunction({j:9,i:2,x:3,z:4}) // 18
myFunction({w:15,x:22,y:13}) // 50