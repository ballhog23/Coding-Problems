function myFunction(a, b) {

    let obj = {};

    for (let i = 0; i < a.length; i++) {
        const key = a[i];
        const value = b[i];
        obj[key] = value
    }

    return obj
}

function myFunction(a, b) {
    return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {})
}

myFunction(['a', 'b', 'c'], [1, 2, 3])
myFunction(['w', 'x', 'y', 'z'], [10, 9, 5, 2])
myFunction([1, 'b'], ['a', 2])