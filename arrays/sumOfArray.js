// Write a function that takes an array of numbers as argument.
// It should return the sum of the numbers.

function sumArrayWithReduce(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0);
}

function sumArrayWithForLoop(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

sumArrayWithReduce([10,100,40]) // 150
sumArrayWithReduce([10,100,1000,1]) // 1111
sumArrayWithReduce([-50,0,50,200]) // 200

sumArrayWithForLoop([10,100,40]) // 150
sumArrayWithForLoop([10,100,1000,1]) // 1111
sumArrayWithForLoop([-50,0,50,200]) // 200