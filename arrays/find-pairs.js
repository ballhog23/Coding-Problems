/**
 * 
 * Given an array of integers arr and a target sum target, find all pairs of distinct integers that add up to the target sum.
 * Return an array of arrays containing these pairs sorted in ascending order.
 * If there are no such pairs, return an empty array.
 * Important: Your result array(s) must have the same sorting as the test cases.
 * 
 */

// function findPairs(arr, target) {
//     const pairs = [];

//     for (let index = 0; index < arr.length; index++) {
//         const currentElement = arr[index];

//         for (let i = 0; i < arr.length; i++) {
//             const element = arr[i];
//             if (currentElement + element === target && currentElement !== element) pairs.push([currentElement, element])
//         }
//     }

//     return pairs.sort().slice(0, arr.length / 2);
// }

function findPairs(arr, target) {
    const seen = new Set();
    const pairs = [];

    for (const num of arr) {
        const compliment = target - num;
        
        if (seen.has(compliment)) pairs.push([num, compliment].sort())
        if (!seen.has(compliment)) seen.add(num)
    }
    return pairs.sort();
}

// findPairs(
//     [1, 2, 3, 4, 5],
//     5
// )

findPairs(
  [3,7,8,4,5,9],
  12
)

// findPairs(
//   [2,4,6,8],
//   10
// )

// findPairs(
//   [1,3,5,7,9],
//   13
// )

// findPairs(
//   [1,2,3,4],
//   8
// )

findPairs([3, 7, 6, 4, 6, 4, 7, 3], 10);
