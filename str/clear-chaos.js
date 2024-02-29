function myFunction(a, b) {
    const stringArray = [a, b];
    const regex = /[^A-Za-z\s]/g;
    const checkForNonLetter = (string) => string.match(regex) || [];
    let pieceOne, pieceTwo = '';
    const reverseString = (string) => {
        const stringArray = string.split('');
        stringArray.reverse();
        return stringArray.join('');
    }

    stringArray.forEach((e, i) => {
        const nonWordCharArray = checkForNonLetter(e);
        if (i === 0) {
            if (nonWordCharArray.length !== 0) {
                pieceOne = a.replace(nonWordCharArray[0], '')
                pieceOne = pieceOne.charAt(0).toUpperCase() + pieceOne.slice(1);
            } else {
                pieceOne = a;
                pieceOne = pieceOne.charAt(0).toUpperCase() + pieceOne.slice(1);
            }
        } else {
            if (nonWordCharArray.length !== 0) {
                pieceTwo = b.replace(nonWordCharArray[0], '');
                pieceTwo = reverseString(pieceTwo)

            } else {
                pieceTwo = b;
                pieceTwo = reverseString(pieceTwo)
            }
        }
    })

    return pieceOne + pieceTwo;
}

function myOptimizedFunction(a, b) {
    const func = x => x.replace('%','');
    const first = func(a);
    const second = func(b).split('').reverse().join('');
    return first.charAt(0).toUpperCase() + first.slice(1) + second;
}

function reverseString(string) {
    const stringArray = string.split('');
    stringArray.reverse();
    return stringArray.join('');
}


// Original function
console.time('original');
for (let i = 0; i < 1000000; i++) {
    myFunction('java', 'tpi%rcs');
    myFunction('c%ountry', 'edis');
    myFunction('down', 'nw%ot');
}
console.timeEnd('original');

// Optimized function
console.time('optimized');
for (let i = 0; i < 1000000; i++) {
    myOptimizedFunction('java', 'tpi%rcs');
    myOptimizedFunction('c%ountry', 'edis');
    myOptimizedFunction('down', 'nw%ot');
}

console.timeEnd('optimized');
