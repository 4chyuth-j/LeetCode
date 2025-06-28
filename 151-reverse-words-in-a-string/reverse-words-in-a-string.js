/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let strArr = s.split(" ");
   
    let result = '';
    while(strArr.length!=0){
        let curr = strArr.pop();
        if(curr){
            curr = curr.trim();
            result+=`${curr} `;
        }
    }


    return result.trim();
};