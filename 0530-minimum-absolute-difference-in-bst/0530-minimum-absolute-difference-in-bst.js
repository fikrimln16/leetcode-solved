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
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let minDiff = Infinity;
  let prevValue = null;

  function dfs(node) {
    if (node === null) {
      return;
    }
    dfs(node.left);
    if (prevValue !== null) {
      minDiff = Math.min(minDiff, Math.abs(node.val - prevValue));
    }
    prevValue = node.val;
    dfs(node.right);
  }

  dfs(root);
  return minDiff;
};