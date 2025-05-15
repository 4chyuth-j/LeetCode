/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let dummy = num;
    while(dummy>9){
        dummy = String(dummy);
        dummy = dummy.split('');
        let sum = 0;
        for(let i=0; i<dummy.length; i++){
            sum+=Number(dummy[i]);
        }
        dummy = sum;
    }

    return dummy;
};