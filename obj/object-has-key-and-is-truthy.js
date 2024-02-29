// Write a function that takes an object (a) and a string (b) as argument.
// Return true if the object has a property with key 'b', but only if it has a truthy value.
// In other words, it should not be null or undefined or false.
// Return false otherwise.

// explicit approach
// This function explicitly checks for the existence of the key before assessing its truthiness.
// The presence of the key is checked using Object.keys(a).includes(b), making the code more explicit about handling potential absence of the key.
function myFunction1(a, b) {
    const checkKeys = Object.keys(a).includes(b)
    
    if (checkKeys) return Boolean(a[b]) ? true : false

    return false;
}

// implicit approach
// myFunction2 takes an implicit approach by 'assuming the key exists' and directly checks the truthiness of a[b].
// It relies on the fact that accessing a non-existent property in JavaScript results in undefined, which is falsy.
function myFunction2(a,b) {
    return Boolean(a[b]);
}

myFunction1({ a: 1, b: 2, c: 3 }, 'b') // T
myFunction1({ x: 'a', y: null, z: 'c' }, 'y') // F
myFunction1({ x: 'a', b: 'b', z: undefined }, 'z') // F
myFunction1({ x: 'a', b: 'b', z: undefined }, 'g') // F

myFunction2({ a: 1, b: 2, c: 3 }, 'b') // T
myFunction2({ x: 'a', y: null, z: 'c' }, 'y') // F
myFunction2({ x: 'a', b: 'b', z: undefined }, 'z') // F
myFunction2({ x: 'a', b: 'b', z: undefined }, 'g') // F