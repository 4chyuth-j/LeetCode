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
var sumRootToLeaf = function(root) {
    let binaryArr = [];

    let bfs = (node,str)=>{
        if(node==null){
            return ;
        }

        let binary = `${str}${node.val}`;
        if(node.left==null && node.right==null){
            binaryArr.push(binary);
        }

        bfs(node.left,binary);
        bfs(node.right,binary);
    }

    bfs(root,"");

    return binaryArr.reduce((sum,bin)=>{
        return sum+parseInt(bin,2);
    },0)
};