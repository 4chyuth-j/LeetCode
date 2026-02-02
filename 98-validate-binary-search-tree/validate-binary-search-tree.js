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
var isValidBST = function(root) {
    return isBST(root,min=-Infinity, max=Infinity);
};

function isBST(root,min,max){
    if(!root) return true;
    if(root.val>min && root.val<max){
        return isBST(root.left,min,root.val) && isBST(root.right,root.val,max);
    } else return false;
}