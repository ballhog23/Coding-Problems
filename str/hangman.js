// Given is a string hangmanString.
// Replace every second letter with an underscore and return the result as a string.
// The first character must be an underscore.

function hangman(hangmanString) {
    const array = hangmanString.split('')

    array.forEach((letter, index) => {
        if (index % 2 === 0) {
            array[index] = '_'
        }
    })
    
    return array.join('')
}

hangman('TestString') //
hangman('Foobar') // '_o_b_r'
hangman('Demo') // '_e_o'
hangman('JS is fancy') // '_S_i_ _a_c_'
hangman('ThisIsAnFancyString') // '_h_s_s_n_a_c_S_r_n_'