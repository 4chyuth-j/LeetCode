/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let res = s.split(" ");

    for(let i=0; i<res.length; i++){
        res[i] = res[i].split('').reverse().join('');
    }
    

    // for(let i=0; i<res.length;i++){
    //     let out = res[i].split('');
        
        
    //     let len = out.length;
    //     for(let j=0; j<out.length/2; j++){
    //         [out[j],out[len-1-j]]=[out[len-1-j],out[j]];
    //     }
        

    //     res[i] = out.join("");
    // }
    

    return res.join(" ");
};