/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let i=0, j=0;
    s = s.split('');
    t = t.split('');
    while(i<s.length){
        if(s[i]==="#"){
            if(s[i-1]){
                s.splice(i-1,2);
                i--;
            } else {
                s.splice(i,1)
            }
        } else {
            i++;
        }
    }

    while(j<t.length){
        if(t[j]==="#"){
            if(t[j-1]){
                t.splice(j-1,2);
                j--;
            } else{
                t.splice(j,1);
            }
        } else {
            j++;
        }
    }
    console.log({s})
    console.log({t})

    return s.join("")===t.join("");
};