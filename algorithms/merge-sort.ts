// const nums = [42, 7, 19, 44, 69, 73, 7, 5];
const nums = [42, 7, 19, 44, 69,];
const result = mergeSort(nums);

console.log(result);

function mergeSort(arr: number[]) {
    if (arr.length === 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let arrOne: number[] = mergeSort(arr.slice(0, mid));
    let arrTwo: number[] = mergeSort(arr.slice(mid));

    return merge(arrOne, arrTwo);
}

// not truly O nlogn because of shift
// use indecies
function merge(arrOne: number[], arrTwo: number[]) {
    let tempArr = [];

    let i = 0, j = 0;

    while (i < arrOne.length && j < arrTwo.length) {

        if (arrOne[i] > arrTwo[j]) {
            tempArr.push(arrTwo[j]);
            j++;
        } else {
            tempArr.push(arrOne[i]);
            i++;
        }
    }

    // at this point either a or b is empty
    while (i < arrOne.length) {
        tempArr.push(arrOne[i]);
        i++;
    }

    while (j < arrTwo.length) {
        tempArr.push(arrTwo[j]);
        j++;
    }

    return tempArr;
}