// Create a function that will take a HEX number and
// returns the binary equivalent (as a string).

function toBinary(num) {
   return num.toString(2).padStart(8, 0) // radix of binary is 2
}

toBinary(0xFF) // 11111111
toBinary(0xAA) // "10101010"

/**
 * note that a hex number such as 0xA will return a binary representation of only 4 digits
 * to maintain a consistent format we can pad the start of the string with 0's at a maximum length of 8
 */

// toBinary(0xA);   // 1010