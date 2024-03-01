// Given an integer n, return a counter function. This counter function initially returns n and
// then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

/**
 * @param {number} n
 * @return {Function} counter
 */
const createCounter = function (n) {
    // the counter first logs n and then increments the number with each subsequent call
    // the trick is the post increment operator
    return () => console.log(n++)
};


const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12
