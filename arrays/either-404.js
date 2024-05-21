function either404(numbers) {
    let zeroNextToZero = false;
    let fourNextToFour = false;

    for (let i = 1; i < numbers.length; i++) {
        let prev = numbers[i - 1];
        let cur = numbers[i];

        if (prev === 0 && cur === 0) {
            zeroNextToZero = true;
        }
        if (prev === 4 && cur === 4) {
            fourNextToFour = true;
        }

        if (zeroNextToZero && fourNextToFour) {
            console.log('false');
            return false;
        }
    }

    if (zeroNextToZero || fourNextToFour) {
        console.log('true');
        return true;
    } else {
        console.log('false');
        return false;
    }
}

// Test cases
either404([4, 3, 1]); // false
either404([2, 8, 4, 4]); // true
either404([0, 0, 3, 6, 4, 4]); // false
either404([3, 4, 2, 4, 6]); // false
either404([1, 4, 4, 0, 2, 0, 9]); // false
