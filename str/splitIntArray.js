function myFunction(a) {
    return `${a}`.split('').map(i => parseInt(i))
}

// function myFunction(a) {
//     const string = a + '';
//     const strings = string.split('');
//     return strings.map(digit => Number(digit))
// }

myFunction(10)
myFunction(931)
myFunction(193278)