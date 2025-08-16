/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let res = 0;
    // for(let i=0; i<s.length; i++){
    //     res +=(123-s[i].charCodeAt(0))*(i+1);
    // }  

    let left = 0, right = s.length-1;

    while(left<=right){
        if(left==right){
            res+=(123-s[left].charCodeAt(0))*(left+1);
        } else {
            res+=(123-s[right].charCodeAt(0))*(right+1);
            res+=(123-s[left].charCodeAt(0))*(left+1);
        }
        left++;
        right--;
    }  

    return res;
};

