function matchRepeatingNums(numbers) {
    const bound = numbers.length;
    const matches = [];

    for (let index = 0; index < bound; index++) {
        const current = numbers[index];
        const next = numbers[index + 1];
        if (current === next) matches.push(current)
    }

    if (matches.length < 1 || matches.length > 1) return console.log(false);
    return console.log(true);
}

// function either404(numbers) {
//     let checkFours = false, checkZeros = false;

//     // i could have used an early return if checkFours and checkZeros === true
//     for (let index = 0; index < numbers.length; index++) {
//         const element = numbers[index];
//         const nextElement = numbers[index + 1];

//         if (element === 4 && nextElement === 4) checkFours = true;
//         if (element === 0 && nextElement === 0) checkZeros = true;
//         if (checkFours && checkZeros) return false;
//     }

//     return checkFours !== checkZeros;
// }


function either404(numbers) {
    return (numbers.some((e, i, a) => e === 4 && a[i + 1] === 4)) !== (numbers.some((e, i, a) => e === 0 && a[i + 1] === 0));
}

// Test cases
// either404([4, 3, 1]); // false
// either404([2, 8, 4, 4]); // true
// either404([0, 0, 3, 6, 4, 4]); // false
// either404([3, 4, 2, 2, 4, 6]); // f
// either404([1, 4, 4, 0, 2, 0, 9]); // t
either404([1, 4, 0, 0, 0, 2, 0, 9]); // t

either404([4, 4, 0, 0, 0, 2, 0, 9]); // t, f, t, t,f,f,f
