
function checkPassword(password, password_repeat) {

    if (!password || !password_repeat) return false

    if (password !== password_repeat) return false

    if (password.length < 8) return false

    //! NOTE: This was my original attempt to validate via regex: /(\d+)([a-zA-Z]+)([\-\_\&\$\%\§]+)/g
    // Pattern Matching: Uses a regex pattern to validate:
    // (?=.*\d): Requires at least one digit.
    // (?=.*[a-z]): Requires at least one lowercase letter.
    // (?=.*[A-Z]): Requires at least one uppercase letter.
    // (?=.*[&$%§\-_]): Requires at least one special character from [&$%§\-_].
    // [a-zA-Z\d&$%§\-_]{8,}: Allows only characters from the specified set and ensures the password is at least 8 characters long.

    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[&$%§\-_])[a-zA-Z\d&$%§\-_]{8,}$/gm;

    if (!password.match(pattern)) return false

    return true
}


// #1
checkPassword(
    'omvdsse',
    'omvdsse'
)
// false

// #2
checkPassword(
    'HUIFDSJHKSADN',
    'HUIFDSJHKSADN'
)
// false

// #3
checkPassword(
    'YY&glk4Hfi_ffS',
    'YY&glk4Hfi_ffS'
)
// true

// #4
checkPassword(
    'Joifd$3',
    'Joifd$3'
)
// false

// # 5 = failing
checkPassword(
    'JoFDd$0MY6Ad4',
    'JoFDd$0MY6Ad4'
)
// true

// # 6
checkPassword(
    'JoFDd#0MY6Ad4',
    'JoFDd#0MY6Ad4'
)
// false

// # 7
checkPassword(
    'EY8J62',
    'EY8J62'
)
// false

// # 8
checkPassword(
    'UR9G1GOF',
    'UR9G1GOF'
)
// false

// # 9
checkPassword(
    '6BKYT2GY8CX7CFPC',
    '6BKYT2GY8CX7CFPC'
)
// false

// # 10
checkPassword(
    'JIOfdsf&fdsflk',
    'JIOfdsf&fdsflk'
)
// false

// # 11
checkPassword(
    'kg4N%sPrX$H',
    'kg4N%sPrX$H'
)
// true

// # 12
checkPassword(
    'ono53a7suikzb3h7',
    'ono53a7suikzb3h7'
)
// false

// # 13
checkPassword(
    'qn%5F',
    'qn%5F'
)
// false

// # 14 = failing
checkPassword(
    '0&J&xxQYmD§kx§k$AO',
    '0&J&xxQYmD§kx§k$AO'
)
// true

// # 15
checkPassword(
    '0&J&xxQYmD§kx§k$AO',
    '0&J&xxQYmD§kx§k$Ao'
)
// false

// # 16
checkPassword(
    '0#J#xxQYmD#kx#k#AO',
    '0#J#xxQYmD#kx#k#AO'
)
// false