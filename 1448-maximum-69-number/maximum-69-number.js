/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
    // let str = num.toString();
    // str = str.split('');
    // let array = [];
    // for (let i = 0; i < str.length; i++) {
    // console.log(str);
    //     let dummy = num.toString();
    //     dummy = dummy.split('');
    //     if (str[i] == '9') {
    //         dummy[i] = '6';
    //     } else if (str[i] == '6') {
    //         dummy[i] = '9';
    //     }
        
    //     dummy = dummy.join('');
    //     console.log(dummy);
    //     array.push(Number(dummy));
    // }

    // array.sort((a, b) => a - b);
    // console.log(array);
    // let large = array.pop();
    // if(large>num){
    //     return large;
    // } else {
    //     return num;
    // }

    let str = num.toString();
    let new_str = str.replace('6','9');
    return parseInt(new_str);

};