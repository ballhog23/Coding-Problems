function getReducedPrice(price, discount) {
    let discountTotal;

    if (discount < 10) {
        discountTotal = Number(price * `.0${discount}`).toFixed(2)
    } else {
        discountTotal = Number(price * `.${discount}`).toFixed(2)
    }

    let total = Number(price - discountTotal).toFixed(2)

    return console.log(Number(total))
    
}

getReducedPrice(
    1000,
    20
)
//   800

getReducedPrice(
    99,
    10
)
//   89.1

getReducedPrice(42, 3)
//   40.74

getReducedPrice(
    499.95,
    15
)
//   424.96

getReducedPrice(
    3.99,
    80
)
//   0.8