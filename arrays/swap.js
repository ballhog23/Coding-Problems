// Given is an array numbers with different numbers.
// Return an array in which the first entry is swapped with the last.
// The rest remains unchanged.

function swap(numbers) {
    const array = [...numbers];

    if (array.length <= 1) {
        return array;
    }

    const first = array[0];
    const last = array[array.length - 1];

    array[0] = last;
    array[array.length - 1] = first;

    return array;
}

function swapTwo(numbers) {
    const array = [...numbers];
    
    if (array.length <= 1) {
        return array;
    }
    
    const first = array.shift();
    const last = array.pop();
    
    array.unshift(last);
    array.push(first);
    
    console.log(numbers)

    return array
}

// swap([1,5,3,7,2,7,3])
// swap([1,6,2,7,9,3,4])
// swap([1,0])
// swap([1])
// swap([])

// swapTwo([1,5,3,7,2,7,3])
// swapTwo([1,6,2,7,9,3,4])
// swapTwo([1,0])
// swapTwo([1])
// swapTwo([])