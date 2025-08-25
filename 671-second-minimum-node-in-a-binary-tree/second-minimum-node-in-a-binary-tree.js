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
var findSecondMinimumValue = function(root) {
    let res = [];
    getSecondMin(root,res);
    let set = new Set(res);
    res = [...set];
    res.sort((a,b)=>a-b);
    if(res[1]){
        return res[1];
    } else return -1;
};

function getSecondMin(root,res){
    if(root!=null){
        res.push(root.val);
        getSecondMin(root.left,res);
        getSecondMin(root.right,res);
    }
}