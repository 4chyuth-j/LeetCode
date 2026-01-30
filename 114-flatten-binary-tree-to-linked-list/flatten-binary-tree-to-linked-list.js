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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(!root)return root;

    let res = [];
    function preOrder(root){
        if(!root) return;
        res.push(root);
        preOrder(root.left);
        preOrder(root.right);
    }
    preOrder(root);

    for(let i=0; i<res.length-1; i++){
        res[i].left = null;
        res[i].right = res[i+1];
    }

    return root;
};