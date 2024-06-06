/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const uniqueSet = new Set();

    for (let i = 0; i < nums.length; i ++) {
        if (uniqueSet.has(nums[i])) return true;
        else uniqueSet.add(nums[i])
    }

    return false;
};

containsDuplicate([1,2,3,1]) // true
containsDuplicate([1,2,3,4]) // false
containsDuplicate([1,1,1,3,3,4,3,2,4,2]) // true