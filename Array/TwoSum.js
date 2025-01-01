//problem link: https://leetcode.com/problems/two-sum/description/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    console.log("el = ", element);
  }
  console.log("t = ", target);
};

twoSum([2, 7, 11, 15], 9);

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
