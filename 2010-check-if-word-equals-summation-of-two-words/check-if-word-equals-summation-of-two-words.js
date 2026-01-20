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

    const calc = firstNum+ secondNum;

    return calc==thirdNum;
};

function getNumericalVal(str){
    let res = '';
    
    for(let c of str){
        res+=c.charCodeAt(0)-97;
    }


    while(res[0]=='0'){
        res = res.slice(1);
    }

    if(res==''){
        return 0;
    } else {
        return Number(res);
    }
}