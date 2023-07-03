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
var minDiffInBST = function(root) {
    let min = Number.MAX_SAFE_INTEGER;
    let prev = null

    const dfs = (node) => {
        if(!node) return;

        dfs(node.left)
        if(prev != null) {
            min = Math.min(min, node.val-prev)
        }
        prev = node.val
        dfs(node.right)
    }

    dfs(root)
    return min
};