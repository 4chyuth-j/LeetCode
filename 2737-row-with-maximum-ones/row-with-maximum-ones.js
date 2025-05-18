/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
    let arr = [];
    for(let i=0; i<mat.length; i++){
        let dum = mat[i];
        let count =0;
        for(let j=0; j<dum.length; j++){
            if(dum[j]==1) count++;
        }
        arr.push({index:i,count});
    }
    arr.sort((a, b) => a.count - b.count);
    let max = arr[arr.length-1].count;
    let storage = arr.find(item=>item.count ==max);
    console.log(storage);
    return [storage.index,storage.count];
}; 