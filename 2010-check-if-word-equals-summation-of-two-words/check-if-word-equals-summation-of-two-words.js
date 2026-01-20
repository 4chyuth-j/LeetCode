/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {

    const firstNum = getNumericalVal(firstWord);
    const secondNum = getNumericalVal(secondWord);
    const thirdNum = getNumericalVal(targetWord);

    return firstNum + secondNum===thirdNum;
};

function getNumericalVal(str){
    let res = 0;
    
    for(let c of str){
        res=res*10+c.charCodeAt(0)-97;
    }

    return res;
    
}