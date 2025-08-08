// You are given a string s.
// The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.
// Return the score of s.

/**
 * @param {string} s
 * @return {number}
 */
const scoreOfString = (s) => {
    let sum = 0;
    const difference = (num1, num2) => Math.abs(num1 - num2);

    for (let i = 0; i < s.length - 1; i++) {
        const charCodeCur = s.charCodeAt(i);
        const charCodeNext = s.charCodeAt(i + 1);
        sum += difference(charCodeCur, charCodeNext)
    }

    return console.log(sum);
};

scoreOfString('hello');
scoreOfString('zaz');
scoreOfString('caleb');