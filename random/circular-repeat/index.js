// Given a string s and a number n, return a new string with the characters of s repeated n times consecutively in a circular manner.
// If the length of the new string is greater than 100, truncate it to a length of 100

// function circularRepeat(s, n) {
//     let str = '';

//     for (let i = 0; i < n; i++) {
//         str += s
//     }

//     return str.slice(0, 100)
// }

function circularRepeatTwo(s,n) {
    return s.repeat(n).slice(0,100);
}

// circularRepeat('abc', 3)
// circularRepeat('123', 5)
// circularRepeat('hello', 2)
// circularRepeat('world', 4)
// circularRepeat('xyz', 10)
// circularRepeat('abcd', 100)

// circularRepeatTwo('abc', 3)
// circularRepeatTwo('123', 5)
// circularRepeatTwo('hello', 2)
// circularRepeatTwo('world', 4)
// circularRepeatTwo('xyz', 10)
circularRepeatTwo('abcd', 100)