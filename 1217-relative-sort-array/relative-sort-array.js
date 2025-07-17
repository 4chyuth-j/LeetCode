/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let freqMap = new Map();
    let result = [];
    let rem = [];
    for(let i=0; i<arr1.length; i++){
        freqMap.set(arr1[i],(freqMap.get(arr1[i]) || 0)+1);
    }

    for(let i=0; i<arr2.length; i++){
        while(freqMap.get(arr2[i])>0){
            result.push(arr2[i]);
            freqMap.set(arr2[i],freqMap.get(arr2[i])-1);
        }
    }

    for(let [key,value] of freqMap){
        while(value>0){
            rem.push(key);
            value--;
        }
    }

    rem.sort((a,b)=>a-b);

    return [...result,...rem];
};