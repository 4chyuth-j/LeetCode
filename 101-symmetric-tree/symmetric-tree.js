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
var isSymmetric = function (root) {
    const isMirror = (elem1, elem2) => {
        if (!elem1 && !elem2) return true;
        if (!elem1 || !elem2) return false;

        return elem1.val == elem2.val && isMirror(elem1.left, elem2.right) && isMirror(elem1.right, elem2.left);
    }

    return isMirror(root.left, root.right);
};