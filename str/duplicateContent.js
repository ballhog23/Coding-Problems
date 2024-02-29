function duplicateCount(text){
    if (text === '') return 0;

    let lowerCaseText = text.toLowerCase()
    let set = new Set(lowerCaseText)
    let duplicateCount = 0;

    set.forEach(i => {
        let regex = new RegExp(`${i}`, 'g')
        lowerCaseText.match(regex).length > 1 ? duplicateCount++ : false;
    })
    
    return duplicateCount;
}



// duplicateCount("")
// duplicateCount("abcde")
// duplicateCount("aabbcde")
// duplicateCount("aabBcde")
// duplicateCount("Indivisibility")
// const start = performance.now()
// duplicateCount("Indivisibilities")
// const end = performance.now()
// console.log(`Execution time: ${end - start} ms`);

export default duplicateCount;