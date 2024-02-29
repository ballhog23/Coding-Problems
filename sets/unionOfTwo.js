// Write a function that takes two Sets as arguments.
// Create the union of the two sets. Return the result.
// Hint: try not to switch to Arrays, this would slow down your code

function myFunction1(a, b) {
    return new Set([...a, ...b]);
}

// ! note: There is an experimental method for JS Sets: .union() it is not widely supported
function myFunction2(a, b) {
    return a.union(b)
}

myFunction1(new Set('123'), new Set('234')) // Set(4) { '1', '2', '3', '4' }
myFunction1(new Set([1, 2, 3]), new Set([3, 4, 5])) // Set(5) { 1, 2, 3, 4, 5 }
myFunction1(new Set([false, false, NaN]), new Set([true, true, NaN])) // Set(3) { false, NaN, true }