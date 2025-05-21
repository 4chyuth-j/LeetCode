/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let str = [];
    for(let i=0; i<num.length; i++){
        let dummy = `${num[i]}${num[i]}${num[i]}`;
        if(num.includes(dummy)){
            str.push(dummy);
        }
    }
    str.sort();
    
    return str.length==0? "":str[str.length-1];
};