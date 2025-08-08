// i need the longest word in the array
// if there are two longest words, meaning there are two words that have the same length and both are the longest, return foobar

// function longestWord(words) {
//     let hiscore = '';
//     let foundDupe = false;
    
//     for (let i = 0; i < words.length; i++) {
//         const current = words[i];
        
//         if (current.length > hiscore.length) {
//             foundDupe = false;
//             hiscore = current;
//         }
        
//         if (current.length === hiscore.length && current !== hiscore) {
//             foundDupe = true;
//         }
//     }
        
//     return foundDupe ? 'Foobar' : hiscore;
// }

// function longestWord(words) {
//     const wordLength = words.map(i => i.length);
//     const longestLength = Math.max(...wordLength);
//     const hiscore = words.filter(element => element.length === longestLength);
    
//     return hiscore.length > 1 ? 'Foobar': hiscore[0];
// }

function longestWord(words) {
    if (words.length === 0) return 'Error';
    if (words.length === 1) return words[0];
    const sortedWords = words.sort((a,b) => b.length - a.length);
    const foundDupe = sortedWords[0].length === sortedWords[1].length;
    return foundDupe ? 'Foobar' : sortedWords[0]
}

// longestWord(
//   ['Welcome','to','JSCodebox']
// )

longestWord(['You','are','great'])

// longestWord(
//   ['You','are','very','beautiful']
// )

longestWord(
  ['Welcome','to','jscodebox.com']
)

// longestWord(['This','is','a','test'])
longestWord(['This','is','a','test', 'ok'])
longestWord(['ONE WORD'])
longestWord([])