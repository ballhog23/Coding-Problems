function myFunction(x, y) {
    if (Object.getOwnPropertyDescriptor(y, 'b')) {
        y.d = y.b;
        delete y.b;
    }

    return Object.assign(x, y)
}

function myFunction(x, y) {
    const { b, ...rest } = y;
    return { ...x, ...rest, d: b };
}


myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })

myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })