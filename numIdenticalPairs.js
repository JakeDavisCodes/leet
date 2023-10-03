/**
 * @param {url} https://leetcode.com/problems/number-of-good-pairs/submissions/?envType=daily-question&envId=2023-10-03
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  let pairs = 0;

  for(let i = 0; i < nums.length; i++) {
      for(let j = i + 1; j < nums.length; j++) {
          if(nums[i] == nums[j]) pairs++;
      }
  }

  return pairs
};