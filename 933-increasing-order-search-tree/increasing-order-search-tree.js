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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
    let arr = [];

    let inOrder = (root) => {
        if (root === null) return;
        inOrder(root.left);
        arr.push(root.val);
        inOrder(root.right);
    }

    inOrder(root);

    let newHead = new TreeNode();
    let dum = newHead;

    for (let i = 0; i < arr.length; i++) {
        dum.val = arr[i];
        if (i + 1 < arr.length) {
            dum.right = new TreeNode();
            dum = dum.right;
        }
    }

    return newHead;

};