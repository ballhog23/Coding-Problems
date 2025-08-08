/**
    You are given positive integers n and m.

    Define two integers as follows:

    num1: The sum of all integers in the range [1, n] (both inclusive) that are not divisible by m.
    num2: The sum of all integers in the range [1, n] (both inclusive) that are divisible by m.
    Return the integer num1 - num2.

 * @param {number} n
 * @param {number} m
 * @return {number}
 */
const differenceOfSums = (n, m) => {
    let num1 = 0, num2 = 0;
    const notDivisible = (num) => num % m !== 0;
    const divisible = (num) => num % m === 0;
 
    for (let i = 1; i <= n; i++) {
        if (notDivisible(i)) num1 += i;
        if (divisible(i)) num2 += i;
    }
    
    return num1 - num2;
};