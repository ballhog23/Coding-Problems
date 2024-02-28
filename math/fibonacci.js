function fibonacci(numberOfTimes) {
    let sequence = new Array(0, 1);
    let prevSumOne = 0;
    let prevSumTwo = 1;
    let fibonacciNumber;

    for (let i = 2; i <= numberOfTimes; i++) {
        fibonacciNumber = prevSumOne + prevSumTwo
        sequence.push(fibonacciNumber);
        prevSumOne = prevSumTwo;
        prevSumTwo = fibonacciNumber
    }

    return console.log(sequence)
}

fibonacci(11)