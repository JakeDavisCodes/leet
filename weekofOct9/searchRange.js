/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let left = 0
  let right = nums.length - 1
  let start, end = -1

  while (left <= right) {
      const mid = Math.floor((left + right) / 2)

      if (nums[mid] === target) {
          console.log(1)
          start = mid
          while (nums[start - 1] === target) {
              console.log(2)
              start--;
          }
          end = mid
          while (nums[end + 1] === target) {
              console.log(end +1, nums[end+1])
              end++;
          }

          break;
      } else if (nums[mid] > target) {
          right = mid - 1
      } else {
          left = mid - 1
      }
  } return [start, end]

};