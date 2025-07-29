// verbose and imperative, works... but unneccessary code like filtering, tracking state and not using early returns,
// apparently arguemnts is not es6 and should use ...args, multiple loops
// no need to convert to string, could have used modulo to get remainder...

// function lastButNotLeast(a, b, c) {
//     let lastDigitArray = [];
//     let digitCheck = false;

//     for (const argument in arguments) {
//         const number = arguments[argument];
//         const lastDigit = number.toString().slice(-1);
//         lastDigitArray.push(lastDigit);
//     }

//     lastDigitArray.sort()
    
//     for (let curIndex = 0, nextIndex = 1 ; curIndex <  lastDigitArray.length - 1; curIndex++, nextIndex++) {
//         const curElement =  lastDigitArray[curIndex];
//         const nextElement = lastDigitArray[nextIndex];
//         if (curElement === nextElement) digitCheck = true;
//     }

//     return digitCheck;
// }

function lastButNotLeast(...numbers) {
    const lastDigit = (i) => i % 10;
    const lastDigitSet = new Set();

    for (const num of numbers) {
        if (lastDigitSet.has(lastDigit(num))) return true;
        lastDigitSet.add(lastDigit(num))
    }

    return false;
}

// lastButNotLeast(
//   37,
//   19,
//   17,
// )

lastButNotLeast(
  42,
  19,
  96
)

// lastButNotLeast(
//   84,
//   23,
//   54
// )

// lastButNotLeast(
//   19,
//   17,
//   38
// )

// lastButNotLeast(
//   1,
//   51,
//   21
// )