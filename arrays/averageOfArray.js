// Write a function that takes an array of numbers as argument. It should return the average of the numbers.
function myFunction(arr) {
    // we can use array.reduce() to get the sum of all the numbers in parameter arr
    // we then divide the sum by the length of the array passed to the function
    return arr.reduce((a, b) => a + b) / arr.length;
}