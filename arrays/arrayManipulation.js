/**
 * You are given an array of n elements, initialized to 0.
 * You are also given a list of m queries, where each query is represented by a triple (a, b, k)
 * and denotes that you should add k to each element in the subarray arr[a...b].
 * 
 * Write a function arrayManipulation(n, queries) that returns the maximum value in the array after performing all the queries.
 */

// brute force
// function arrayManipulation(n, queries) {
//     const arrayInit = Array(n).fill(0);

//     for (let index = 0; index < queries.length; index++) {
//         const currentArray = queries[index];
//         const [a,b,k] = currentArray;

//         for (let i = a; i <= b; i++) {
//             arrayInit[i - 1] += k; 
//         }
//     }

//     return Math.max(...arrayInit)
// }

// weird implementation of the Array Difference Technique
function arrayManipulation(n, queries) {
  const arr = [...Array(n).fill(0)];
  const diff = [...Array(n + 1).fill(0)];

  for (let i = 0; i < queries.length; i++) {
    const [left, right, value] = queries[i];
    diff[left] += value;
    if (right + 1 < diff.length) diff[right + 1] -= value;
  }

  for (let i = 1; i < n + 1; i++) {
    diff[i] += diff[i - 1];
    arr[i - 1] += diff[i]
  }

  return Math.max(...arr)
}

arrayManipulation(
  4,
  [[2, 3, 603], [1, 1, 286], [4, 4, 882]]
)

// arrayManipulation(
//   5,
//   [[1, 3, 3],[2, 4, 2]]
// ) //[2, 4, 2]

// arrayManipulation(
//   5,
//   [[1,2,100],[2,5,100],[3,4,100]]
// ) // [2,5,100],[3,4,100]


// arrayManipulation(
//   10,
//   [[1, 5, 3], [4, 8, 7], [6, 9, 1]]
// )

// arrayManipulation(
//   3,
//   [[1, 3, 5], [2, 2, 2], [3, 3, 2]]
// )

// arrayManipulation(
//   2,
//   [[1, 2, 1], [1, 2, 2]]
// )

// arrayManipulation(
//   5,
//   [[1,3,3],[2,4,2]]
// ) // [2,4,2]

// arrayManipulation(
//   5,
//   [[0,1,100],[1,4,100],[2,3,100]]
// )

// arrayManipulation(
//   4,
//   [[1, 2, 603], [0, 0, 286], [3, 3, 882]]
// )

// arrayManipulation(
//   10,
//   [[0, 4, 3], [3, 7, 7], [5, 8, 1]]
// )

// arrayManipulation(
//   3,
//   [[0, 2, 5], [1, 1, 2], [2, 2, 2]]
// )

// arrayManipulation(
//   2,
//   [[0, 1, 1], [0, 1, 2]]
// )