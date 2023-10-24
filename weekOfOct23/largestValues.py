# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def largestValues(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """

        if not root:
            return []

        largest = [root.val]
        current = []

        if root.left:
            current.append(root.left)
        if root.right:
            current.append(root.right)

        while current:
            nextLevel = []
            maxVal = current[0].val

            for node in current:
                if node.left:
                    nextLevel.append(node.left)
                if node.right:
                    nextLevel.append(node.right)
                if node.val > maxVal:
                    maxVal = node.val

            largest.append(maxVal)
            current = nextLevel

        return largest
