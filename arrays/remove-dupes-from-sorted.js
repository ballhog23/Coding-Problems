/**
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
 * The relative order of the elements should be kept the same.
 * Then return the number of unique elements in nums.
 * Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
 * Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially.
 * The remaining elements of nums are not important as well as the size of nums.
 * Return k.
 * 
 * REFLECTION:
 * in the intial version i did not understand that i just need to swap elements, i thought i had to delete them in place.
 * that is why i used splice and calculated the last occurence of the current repeating num with lastIndexOf
 * 
 * 
 * @param {number[]} nums
 * @return {number}
 */

const literallyRemoveDuplicates = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        const cur = nums[i];
        const next = nums[i + 1];
        if (cur === next) nums.splice(i, (nums.lastIndexOf(cur) - i))
    }
};

/**
 * REFLECTION:
 * in this implementation we use a pointer "left" to track the amount of unique integers we encounter.
 * we use a pointer "right" to scan through the array.
 * we start from index 1 because the element in index 0 is always unique.
 * we compare the current element to the previous element to determine if the current element is unique.
 * 
 * instead of actually removing the elements from the array, we are instead just swapping any unique element at Right
 * and placing it at the Left pointer and then incrementing the left pointer.
 * 
 * the left pointer keeps track of unique values we encounter, and this is our answer to the problem.
 * the testing function takes the amount of unique elements we encountered and tests if those elements are present and
 * are still in the correct order.
 * 
 * @param {number[]} nums 
 * @returns  {number}
 */

const removeDuplicates = function (nums) {
    let left = 1;

    for (let right = 1; right < nums.length; right++) {
        const cur = nums[right];
        const prev = nums[right - 1];

        if (cur !== prev) {
            nums[left] = cur;
            left++;
        }
    }
    
    return left;
};


// removeDuplicates([-1, 0, 0, 0, 0, 3, 3, 4])
// removeDuplicates([1,1,2])
removeDuplicates([1,1,2,2,3,3,4,4])