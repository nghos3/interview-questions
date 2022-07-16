/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for(let i in nums) {
        const gg = nums.filter(e => nums[i]+ e === target);
        console.log(gg);
    }
};

console.log(twoSum([3,2,4], 6));