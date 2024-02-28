// calebs solution
function more4than0(n) {
    let cZero = 0
    let cFour = 0

    n.forEach(i => {
        i === 0 ? cZero++ : (i === 4 ? cFour++ : null)
    })
    return cFour > cZero ? true : false

}

more4than0([1, 4, 0])

// others solution
// function more4than0(n) {
//     return n.filter(i => i === 4).length > n.filter(i => i === 0).length;
// }