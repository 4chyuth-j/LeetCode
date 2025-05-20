/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // if(s.length !=t.length) return false;
    // for(let i=0; i<s.length; i++){
    //     let condition = t.includes(s[i])
    //     if(!condition) return false

    //     if(condition){
    //         let sCount = 0;
    //         let tCount = 0;
            
    //         for(let item of s){
    //             if(item == s[i]) sCount++;
    //         }
    //         for(let item of t){
    //             if(item == s[i]) tCount++;
    //         }
    //         if(sCount!=tCount) return false;
    //     }
    // }
    // return true;
    
     if (s.length !== t.length) return false;

    const count = {};

    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of t) {
        if (!count[char]) return false;
        count[char]--;
    }

    return true;
    
};
