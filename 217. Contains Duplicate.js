// 217. Contains Duplicate

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
    let set = new Set();
    for (let i = 0; i < nums.length; i ++) {
        num = nums[i];
        if (set.has(num)) return true;
        else set.add(num);
    }
    return false;
};