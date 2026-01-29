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
var maxDepth = function(root) {
    if(!root) return 0;
    let depth =0;
    let queue = [root];
    let levelSize= 0;


    while(queue.length>0){
        levelSize = queue.length;
        depth++;
        for(let i=0; i<levelSize; i++){
            let item = queue.shift();

            if(item.left) queue.push(item.left);
            if(item.right) queue.push(item.right);
        }
    }

    return depth;
     
};