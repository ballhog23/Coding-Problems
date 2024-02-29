// Write a function that takes two objects as arguments.
// Unfortunately, the property 'b' in the second object (y) has the wrong key.
// It should be named 'd' instead.
// Merge both objects and correct the wrong property name.
// Return the resulting object.
// It should have the properties 'a', 'b', 'c', 'd', and 'e'


// myFunction1 returns the modified y object, but it's also modified in place.
// which we typically do not want to do
function myFunction1(x, y) {
    if (Object.getOwnPropertyDescriptor(y, 'b')) {
        y.d = y.b;
        delete y.b;
    }

    return Object.assign(x, y)
}

// myFunction2 returns a new object that is the result of merging x, rest, and the corrected 'd'.
function myFunction2(x, y) {
    const { b, ...rest } = y;
    return { ...x, ...rest, d: b };
}


myFunction1({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })
myFunction1({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })

myFunction2({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })
myFunction1({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })
