// You are given an array that contains two integers.
// The goal of the function is to return the sum of all numbers between (and including) those two numbers.

function sumAll(arr) {
  let sorted = arr.sort((a,b) => a - b)
  const first = sorted[0]
  const last = sorted[1]
  let sum = 0;


  for (let i = first; i <= last; i++) {
    sum += i
  }

  return sum
}

sumAll([1, 4]);
sumAll([4, 1]);
sumAll([5, 10]);
sumAll([10, 5]);