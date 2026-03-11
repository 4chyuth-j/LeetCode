/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    let bin = n.toString(2);
    let comp = '';
    for(let i=0; i<bin.length; i++){
        if(bin[i]==='1') comp+='0';
        else comp+='1';
    }

    return parseInt(comp,2);
};