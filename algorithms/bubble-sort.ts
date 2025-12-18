// const nums = [42, 7, 19, 73, 3, 88, 21, 7, 54, 1, 90, 33, 12, 66, 5];
const nums = [42, 7, 19, 73, 7, 5];

function bubbleSort(arr: number[]) {
    // assume the array is not sorted.
    let sorted = false;
    let iterationCount = 0;
    // while the array is not sorted lets run through the array once, comparing adjacent elements
    while (!sorted) {
        // lets mark the array is sorted, that way if we don't encounter an swaps in the iteration, we can exit
        sorted = true;
        for (let i = 0, j = 1; i < arr.length - 1; i++, j++) {
            let left = arr[i], right = arr[j];

            if (left > right) {
                let temp = left;
                arr[i] = right;
                arr[j] = temp;
                // since we met the condition that the left element is > right element, we know our array wasn't sorted
                // we will run anohter iteration until we don't meet this condition
                sorted = false;
            }
        }
        iterationCount++;
    }
    console.log(iterationCount);
    return arr;
}

bubbleSort(nums);