function myFunction(a, b) {
    const regex = new RegExp(b, 'g');
    const checkIfPresent = (string) => string.match(regex) || [];
    const lengthIfPresent = checkIfPresent(a).length;

    return lengthIfPresent > 0 ? b + a : a + b;
}

// so if b = 'cake' and a = 'cheesecake' when we look at a.indexOf('cake')
// it matches cake as a substring and returns the nearest index of the substring so 6 in the case of cake and cheesecake
function myOptimizedFunction(a, b) {
    console.log(a.indexOf(b))
    return a.indexOf(b) === -1 ? a + b : b + a
}



myOptimizedFunction('cheesecake', 'cake')
// myOptimizedFunction('lips', 's')
// myFunction('Java', 'script')
// myFunction(' think, therefore I am', 'I')

// Original function
// console.time('original');
// for (let i = 0; i < 1000000; i++) {
// myFunction('cheese', 'cake')
// myFunction('lips', 's')
// myFunction('Java', 'script')
// myFunction(' think, therefore I am', 'I')
// }
// console.timeEnd('original');

// // Optimized function
// console.time('optimized');
// for (let i = 0; i < 1000000; i++) {
//     myOptimizedFunction('cheese', 'cake')
//     myOptimizedFunction('lips', 's')
//     myOptimizedFunction('Java', 'script')
//     myOptimizedFunction(' think, therefore I am', 'I')
// }

// console.timeEnd('optimized');