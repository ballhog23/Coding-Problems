function fizzBuzz(start, end) {
    
    const fizzBuzzArray = new Array();

    for (let i = start; i <= end; i++) {
        if (i % 3 === 0 && i % 5 === 0) fizzBuzzArray.push('FizzBuzz')
        else if (i % 5 === 0) fizzBuzzArray.push('Buzz')
        else if (i % 3 === 0) fizzBuzzArray.push('Fizz')
        else fizzBuzzArray.push(i)
    }

    return fizzBuzzArray
}