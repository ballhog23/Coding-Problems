function longestNonrepeatingSubstring(str) {

    let counter = 0;

    [...str].reduce((prev, cur, i = 1, [...str]) => {
        prev = [...str][i - 1]
        console.log(`prev item in array ${prev}`)
        console.log(`current item in array ${cur}`)
        console.log(`current index in array ${i}`)

        cur === prev ? counter++ : false;
    })

    console.log(counter)
}

longestNonrepeatingSubstring("abcabcbb")