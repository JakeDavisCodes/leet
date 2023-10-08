class Solution(object):
    def isMonotonic(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """


        if len(nums) == 1:
            return True

        increasing = None

        for i in range (1, len(nums)):
            print(increasing)
            if increasing == None:
                increasing = None if nums[i - 1] == nums[i] else False if nums[i - 1] > nums[i] else True
            elif increasing and nums[i - 1] > nums[i]:
                return False
            elif not increasing and nums[i - 1] < nums[i]:
                return False

        return True
