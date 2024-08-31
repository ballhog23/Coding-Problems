function palindrome(pali) {
    let lower = pali.toLowerCase();
    let reversePali = lower.split('').reverse().join('');

    return lower === reversePali;
}


palindrome('racecar')
// true

palindrome('eye')
// true

palindrome('baseball')
// false

palindrome('otto')
// true

palindrome('rotators')
// false