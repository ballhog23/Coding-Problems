function sevenBoom (arr) {
    let seven = [];

    arr.forEach(i => {
        i.toString().match(/7/) ? seven.push(i) : false;
    });

    return seven.length > 0 ? console.log('Boom!') : console.log('there is no 7 in the array');
}

sevenBoom([2, 3, 377, 6])
sevenBoom([2, 3, 88, 6])