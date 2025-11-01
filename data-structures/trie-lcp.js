/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return '';
    const root = {}, endSymbol = '*';
    const addWord = (word) => {
        let currentLevel = root;
        for (const char of word) {

            if (!(char in currentLevel)) {
                currentLevel[char] = {}
            }
            currentLevel = currentLevel[char]
        }
        currentLevel[endSymbol] = true
    }
    const createTrie = (arr) => {
        for (const word of arr) {
            addWord(word)
        }
    }
    createTrie(strs);

    if (Object.keys(root).length !== 1) return '';

    let cur = root;
    let prefix = "";
    while (true) {
        const keys = Object.keys(cur).filter((k) => k !== endSymbol);
        if (keys.length !== 1 || cur[endSymbol]) break;
        const [k] = keys;
        prefix += k
        cur = cur[k]
    }

    return prefix
};