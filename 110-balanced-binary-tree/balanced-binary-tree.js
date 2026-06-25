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
 * @return {boolean}
 */
var isBalanced = function (root) {
    if (root == null) return true;
    let lh = 0, rh = 0;

    lh = findHeight(root.left);
    rh = findHeight(root.right);

    if(Math.abs(lh - rh)>1) return false;

    return isBalanced(root.left) && isBalanced(root.right);

};

function findHeight(node) {
    if (node == null) return 0;

    let lh = findHeight(node.left);
    let rh = findHeight(node.right);

    return 1 + Math.max(lh, rh);
}