class Solution(object):
    def majorityElement(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """

        n = len(nums)
        limit = n/3

        majors = []
        counts = {}

        for num in nums:
            if num not in counts:
                counts[num] = 1
            else:
                counts[num] += 1

            if counts[num] > limit and num not in majors:
                majors.append(num)

            if len(majors) == 3:
                break

        return majors

