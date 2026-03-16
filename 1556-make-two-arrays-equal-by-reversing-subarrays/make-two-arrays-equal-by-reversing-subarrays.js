/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    let freq = {};
    for(let item of target){
        if(freq[item]){
            freq[item]++
        } else {
            freq[item] = 1;
        }
    }



    for(let elem of arr){

        if(!freq[elem]) return false;

        else {
            freq[elem]--;
        }


        if(freq[elem]===0){
            delete freq[elem];
        }




    }

    return true;
};