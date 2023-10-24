/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  if (!root) return []

  const largest = [root.val]
  let current = []

  if (root.left) current.push(root.left)
  if (root.right) current.push(root.right)

  while (current.length) {
      let next = []
      let max = current[0].val

      for(let i = 0; i < current.length; i++) {
          if (current[i].left) next.push(current[i].left)
          if (current[i].right) next.push(current[i].right)
          if (current[i].val > max) max = current[i].val
      }

      largest.push(max)
      current = next
  }

  return largest
};