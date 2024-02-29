// Write a function that takes an object (a) and a number (b) as arguments.
// Multiply all values of 'a' by 'b'. Return the resulting object.

function myFunction(a, b) {
    for (const key in a) {
        a[key] = a[key] * b;
    }
    return a
}

myFunction({ a: 1, b: 2, c: 3 }, 3)
myFunction({ j: 9, i: 2, x: 3, z: 4 }, 10)
myFunction({ w: 15, x: 22, y: 13 }, 6)