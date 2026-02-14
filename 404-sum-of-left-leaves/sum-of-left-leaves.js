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
var sumOfLeftLeaves = function(root) {
    let ans =0;
    const helper = (root,flag)=>{
        if(root===null) return 0;
        if(root.left===null && root.right===null && flag){
            ans+=root.val;
        }

        helper(root.left,true);
        helper(root.right,false);
    }

    helper(root,false);
    return ans;
};

