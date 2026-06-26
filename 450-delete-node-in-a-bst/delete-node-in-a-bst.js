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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(!root) return root;
    if(root.val===key){
        root = helper(root);
        return root;
    }
    let dum = root;
    while(dum){
        if(dum.val>key){
            if(dum.left && dum.left.val===key){
                dum.left = helper(dum.left);
                break;
            } else {
                dum = dum.left;
            }
        } else{
            if(dum.right && dum.right.val===key){
                dum.right = helper(dum.right);
                break;
            } else {
                dum = dum.right;
            }
        }
    }

    return root;
};



function helper(node){
    if(node.left===null) return node.right;
    if(node.right===null) return node.left;

    let rightSub = node.right;
    let rightMost = getRight(node.left);

    rightMost.right = rightSub;
    return node.left;
}

function getRight(node){
    while(node.right){
        node = node.right;
    }

    return node;
}










