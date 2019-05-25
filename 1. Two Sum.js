// 1. Two Sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i ++) {
        for (let j = i; j < nums.length; j ++) {
            if (nums[i] + nums[j] === target && i !== j) return [i, j];
        }
    }
};