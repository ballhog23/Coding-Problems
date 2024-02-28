/**
 * Implement the function unique_in_order which takes as argument a sequence and 
 * returns a list of items without any elements with the same value next to each other and
 * preserving the original order of elements.
 * 
 * ! NOTE: C !== c 
 */

function uniqueInOrder(iterable) {
    if (iterable === '' || iterable === null || iterable === undefined) return [];

    let previousItem = null;
    let uniqueInOrderArray = [iterable[0]];

    for (let index = 1; index < iterable.length; index++) {
        previousItem = iterable[index - 1];
        iterable[index] === previousItem ? true : uniqueInOrderArray.push(iterable[index])
    }

    return console.log(uniqueInOrderArray);
}

uniqueInOrder('AAAABBBCCDAABBB')
uniqueInOrder('ABBCcAD') 
uniqueInOrder([1,2,2,3,3]) 