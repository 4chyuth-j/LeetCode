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
var countNodes = function (root) {
    let count = [];
    getCount(root, count);
    return count.length;
};

function getCount(root, count) {
    if (root != null) {
        count.push(root.val);
        getCount(root.left, count);
        getCount(root.right, count);
    }

}