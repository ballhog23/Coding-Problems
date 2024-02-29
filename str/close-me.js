/**
 * @param str{string} string to manipulate
 */
function closeMe(str) {

let arr = Array.from(document.querySelectorAll(str))
let newArrLen = arr.length / 2;

arr.forEach(i => {
    i.remove()
})


for (let i =0; i < newArrLen; i++) {
    let newEle = document.createElement('div')
    newEle.innerText = 'hello'
    document.querySelector('section').append(newEle)
}


// console.log(arr)
}

closeMe('div')