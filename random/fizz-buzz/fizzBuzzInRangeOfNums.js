function fizzBuzz(min, max) {
    // Array(max - min + 1) sets the length of the array
    // .fill(0) fills the array with arbitrary number 0
    // .map((_, i ) => min + 1) _ is a javascript identifier, just like a,b,c,e,i,$ 
    // we calculate what to begin filling the array with by taking the minimum value and adding the i (index) to it
    // e.g., min = 3, 3+0, 3+1, 3+2 ...
    let range = Array(max - min + 1).fill(0).map((e, i) => min + i);
    let fizzBuzzArr = [];
    range.forEach(i => {
        if (i % 3 === 0) {
            fizzBuzzArr.push('Fizz')
        } else if (i % 5 === 0) {
            i = 'Buzz'
            fizzBuzzArr.push('Buzz')
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
            fizzBuzzArr.push('FizzBuzz')
        } else {
            fizzBuzzArr.push(i)
        }
    })

    return console.log(fizzBuzzArr)

}

// fizzBuzz(4, 13)
// fizzBuzz(49, 53)
fizzBuzz(3, 16)