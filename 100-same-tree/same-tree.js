/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let q1 = [p];
    let q2 = [q];

    while(q1.length!=0 && q2.length!=0){
        let elem1 = q1.shift();
        let elem2 = q2.shift();

        if(elem1 == null && elem2== null) continue;

        if(elem1 == null || elem2 == null) return false;

        if(elem1.val !=elem2.val ) return false;

        q1.push(elem1.left);
        q2.push(elem2.left);

        q1.push(elem1.right);
        q2.push(elem2.right);

    }
    

    return q1.length ==0 && q2.length ==0;
};