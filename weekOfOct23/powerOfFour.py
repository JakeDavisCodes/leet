class Solution(object):
    def isPowerOfFour(self, n):
        """
        :type n: int
        :rtype: bool
        """

        if n <= 0:
            return False

        log = math.log(n, 4)

        if log % 1 == 0:
            return True
        else:
            return False
