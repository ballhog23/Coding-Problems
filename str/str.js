function strangeWord(word) {
    let sub = '';

    for (let i = 0; i < word.length; i++) {
        const e = word[i];
        if (i % 2 === 0) {
            sub = sub.concat(e)
        }

    }
    return sub
}

strangeWord('JSCodebox')