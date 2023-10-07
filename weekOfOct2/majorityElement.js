/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  const n = nums.length;
  const limit = n/3;

  let majors = [];
  const map = {};

  for (let i = 0; i < n; i++) {
      map[nums[i]] === undefined ? map[nums[i]] = 1 : map[nums[i]]++;
      console.log(map[nums[i]], limit)
      if (map[nums[i]] > limit && !majors.includes(nums[i])) majors.push(nums[i])
      if (majors.length === 3) break;
  }

  console.log(map)

  return majors;
};
