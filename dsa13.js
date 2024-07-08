/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let intersection = nums1.filter(value => nums2.includes(value));
    return intersection
};

console.log(intersect([4,9,5],[9,4,9,8,4]))
console.log(intersect([1,2,2,1],[2,2]))