// 349. Intersection of Two Arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    let results =[];
    let resultsSet = new Set();
    set1.forEach(num => {
        if (set2.has(num) && !resultsSet.has(num)) { 
            resultsSet.add(num);
            results.push(num);
        }
    });
    return results;
};