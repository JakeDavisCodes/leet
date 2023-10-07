/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
  if (nums.length === 1) return true;

  let increasing = nums[0] === nums[1] ?
      undefined :
      nums[0] > nums[1] ?
          false : true;

  for (let i = 2; i < nums.length; i++) {
      if (increasing === undefined) increasing = nums[i - 1] === nums[i] ?
                                                      undefined :
                                                      nums[i - 1] > nums[i] ?
                                                          false : true;

      else if (increasing && nums[i - 1] > nums[i]) return false
      else if (!increasing && nums[i - 1] < nums[i]) return false
  }

  return true
};