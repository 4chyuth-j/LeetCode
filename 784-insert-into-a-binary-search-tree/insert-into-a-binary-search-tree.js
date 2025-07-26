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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    let node = new TreeNode(val);
    if(root==null){
        root = node;
    } else {
        insertNode(root,node);
    }
    return root;
};

function insertNode(root,node){
    
    if(node.val<root.val){

        if(root.left == null){
            root.left = node;
        } else {
            insertNode(root.left, node);
        }
    } else {
        if(root.right == null){
            root.right = node;
        } else {
            insertNode(root.right,node);
        }
    }
}