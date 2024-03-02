// Jack really likes his number five:
// the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers,
// so,for example:

//   3 -->    15  (  3 * 5¹)
//  10 -->   250  ( 10 * 5²)
// 200 --> 25000  (200 * 5³)
//   0 -->     0  (  0 * 5¹)
//  -3 -->   -15  ( -3 * 5¹)


function multiply(number) {
    if (number < 0) {
        const digits = Math.abs(number).toString().length
        return -Math.abs(number) * 5 ** digits;
    }

    const digits = number.toString().length

    return number * 5 ** digits
}

multiply(10) // 250
multiply(5) //25
multiply(200) //25000
multiply(0), 0 // 0
multiply(-2) //-10