/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let i=0, j=0;
    s = s.split('');
    t = t.split('');

    processString(s);
    processString(t);
    

    return s.join("")===t.join("");
};

function processString(str){
    let i = 0;
    while(i<str.length){
        if(str[i]==="#"){
            if(str[i-1]){
                str.splice(i-1,2);
                i--;
            } else {
                str.splice(i,1)
            }
        } else {
            i++;
        }
    }
}