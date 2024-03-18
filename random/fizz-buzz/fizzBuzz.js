// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.


function fizzBuzz(number) {
    const array = [];

    for (let i = 1; i <= number; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            array.push('FizzBuzz')
        } else if (i % 3 === 0) {
            array.push('Fizz')
        } else if (i % 5 === 0) {
            array.push('Buzz')
        } else {
            array.push(`${i}`)
        }

    }

    return array
}

fizzBuzz(100)