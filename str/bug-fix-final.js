// A string string is given.
// Remove any occurrence of 'bug' by 'flower'.
// Attention: 'bug' can occur several times in the string.

function bugFixFinal(string) {
    return string.replaceAll('bug', 'flower')
}

bugFixFinal('xxbugYYX')
// 'xxflowerYYX'

bugFixFinal('bug')
// 'flower'

bugFixFinal('xxbugXbugbugYYy')
// 'xxflowerXflowerflowerYYy'

bugFixFinal('bugXYYbugxX')
// 'flowerXYYflowerxX'

bugFixFinal('xxxYYYzbugzyx')
// 'xxxYYYzflowerzyx'
