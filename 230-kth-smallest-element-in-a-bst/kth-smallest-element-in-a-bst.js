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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {

    let res = [];

    function findKth(root,k){
        if(root){
            findKth(root.left,k);
            res.push(root.val);
            findKth(root.right,k);
        }
    }

    findKth(root,k);

    return res[k-1];
    
};

