/**
 * @param str{string} string to manipulate
 */
function everyOther(str) {
    let newStr = '';

    for (let i = 0; i < str.length; i++) {
        i % 2 === 0 ? newStr += str[i].toUpperCase() : newStr += str[i].toLowerCase();
    }

    return console.log(newStr)
}

everyOther('HELLO')