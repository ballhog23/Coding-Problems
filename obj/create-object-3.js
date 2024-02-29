// Write a function that takes two arrays (a and b) as arguments.
// Create an object that has properties with keys 'a' and corresponding values 'b'.
// Return the object.
// ! Note: you can assume that both arrays of are the same length

// using for loop
function myFunction1(a, b) {
    let obj = {};

    for (let i = 0; i < a.length; i++) {
        const key = a[i];
        const value = b[i];
        obj[key] = value
    }

    return console.log(obj)
}

myFunction1(['a', 'b', 'c'], [1, 2, 3]) // {a:1,b:2,c:3}
myFunction1(['w', 'x', 'y', 'z'], [10, 9, 5, 2]) // {w:10,x:9,y:5,z:2}
myFunction1([1, 'b'], ['a', 2]) // {1:'a',b:2}

// using reduce
const myFunction2 = (a,b) => a.reduce((accumulator, currentValue, currentIndex) => {
    console.log(accumulator)
    return {...accumulator, [currentValue] : b[currentIndex]}
}, {})

// how this process looks using reduce
// {} - since we provided a starting value for accumulator it is an empty oject
// { a: 1 } - first iteration
// { a: 1, b: 2 } - second iteration
// { a: 1, b: 2, c: 3 } - third iteration

// * additional notes *
// {...accumulator} - This part uses the spread syntax (...) to create a shallow copy of the current accumulator object.
// This is important because in each iteration, you want to retain the key-value pairs from the previous iterations.

// [currentValue]: b[currentIndex] - This part adds a new key-value pair to the copied accumulator object.
// The key is taken from the current element of array a (denoted by currentValue),
// and the value is taken from the corresponding element of array b at the current index (denoted by b[currentIndex]).

myFunction2(['a', 'b', 'c'], [1, 2, 3]) // {a:1,b:2,c:3}
myFunction2(['w', 'x', 'y', 'z'], [10, 9, 5, 2]) // {w:10,x:9,y:5,z:2}
myFunction2([1, 'b'], ['a', 2]) // {1:'a',b:2}