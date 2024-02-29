// Write a function that takes an object as argument.
// It should return an object with all original object properties.
// except for the property with key 'b'


// note : The delete operator mutates the original object in place by removing the specified property.
// generally speaking it is best practice to not mutate the original object or data for that matter
function myFunction1(obj) {
    delete obj.b
    return obj
}

// This function uses destructuring assignment to create a new object that excludes the property with the key 'b'.
// The { b, ...rest } = obj syntax creates a new object called rest that contains all properties of the input object
// except the one with the key 'b'.
// The function then returns this new object.

function myFunction2(obj) {
    const { b, ...rest } = obj;

    return { ...rest }
}
 
myFunction1({ a: 1, b: 7, c: 3 }) // Returns: { a: 1, c: 3 }
myFunction1({ b: 0, a: 7, d: 8 }) // Returns: { a: 7, d: 8 }
myFunction1({ e: 6, f: 4, b: 5, a: 3 }) // Returns: { e: 6, f: 4, a: 3 }

myFunction2({ a: 1, b: 7, c: 3 }) // Returns: { a: 1, c: 3 } 
myFunction2({ b: 0, a: 7, d: 8 }) // Returns: { a: 7, d: 8 }
myFunction2({ e: 6, f: 4, b: 5, a: 3 }) // Returns: { e: 6, f: 4, a: 3 }