function gHappy(string) {
    if (string.length < 2) return false;

    let happyOrNot = false;

    for (let index = 0; index < string.length; index++) {
        const previousElement = string[index - 1];
        const element = string[index];
        const nextElement = string[index + 1];

        if (element === 'g') {
            if (previousElement === 'g' || nextElement === 'g') happyOrNot = true;
            if (previousElement !== 'g' || nextElement !== 'g') happyOrNot = false;
        }
        
        // console.log(`prev: ${previousElement} || cur: ${element} || next: ${nextElement}`)
    }

    console.log(happyOrNot)
}

gHappy('xyggxyz')
// gHappy("gggag")
// gHappy('Huggy Wuggy')
// gHappy('xxzzgxxzz')
gHappy('garage of eggs')
gHappy('yyzzgxxzzggzzy')
// gHappy('Not bigGgame!')
// gHappy('')
// gHappy('g')
// gHappy('gg')
// gHappy('egg')
// gHappy('BIGger!')
// gHappy('The bigggest egggame!')
// gHappy('garage')