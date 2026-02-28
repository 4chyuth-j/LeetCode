/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const row1 = "qwertyuiop";
    const row2 = "asdfghjkl";
    const row3 = "zxcvbnm";
    const res = [];

    outter:for(let i=0; i<words.length; i++){
        let row = null;
        if(row1.includes(words[i][0].toLowerCase())){
            row = row1;
        } else if(row2.includes(words[i][0].toLowerCase())){
            row = row2;
        } else {
            row = row3;
        }

        for(let c of words[i]){
            if(!row.includes(c.toLowerCase())) continue outter;
        }
        res.push(words[i]);
    }

    return res;
};