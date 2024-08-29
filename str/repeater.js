// Given is a String string and a number n.
// Return a string with the section from 0 to n in a row.
// In each run n is to be decremented.

function repeater(string, n) {
    let row = '';

    for (let i = n; i >= 0; i--) {
        row += string.substr(0, i);
    }

    return row;
}

repeater(
    'JSCodebox',
    6
  )
//   'JSCodeJSCodJSCoJSCJSJ'

//   repeater('Foobar',2)
//   'FoF'

//   repeater('',2)
//   ''

//   repeater(
//     'Hello coder!',
//     5
//   )
//   'HelloHellHelHeH'

//   repeater('Hi',3)
//   'HiHiH'