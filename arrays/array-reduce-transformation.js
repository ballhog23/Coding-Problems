// Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.
// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed.
// The ultimate value of val is then returned.
// If the length of the array is 0, the function should return init.
// Please solve it without using the built-in Array.reduce method.

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = function(nums, fn, init) {
    let result = init;

    for(let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i])
    }

    return result
};

function sum(accum, curr) { return accum + curr; }
function sumTimes(accum, curr) { return accum + curr * curr; }
function sumNone(accum, curr) { return 0; }

const sumFn = reduce([1,2,3,4], sum, 0); // 10
const sumTimesFn = reduce([1,2,3,4], sumTimes, 100); // 130
const sumNoneFn = reduce([], sumNone, 25); // 25, returns initial value