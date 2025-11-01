/**
 * @param {number} x
 * @return {number}
 */

const reverse = function (x) {
    const sign = x > 0 ? 1 : -1;
    let result = 0;
    let temp = Math.abs(x);

    while (temp > 0) {
        const digit = temp % 10;
        result = (result * 10) + digit;
        temp = Math.floor(temp / 10)
        console.log(result)
    }
}

// var reverse = function (x) {
//     let reversed = parseInt(x.toString(10).split('').reverse().join(''));
//     const sign = x > 0 ? 1 : -1;
//     const max = 2147483647;
//     const num = reversed * sign;
//     if (num > max || num < -max) return 0;
//     return num;
// };

reverse(123)
// reverse(-123)
// reverse(120)