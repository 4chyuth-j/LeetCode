/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    let one =[];

    for(let i=0; i<boxes.length; i++){
        if(boxes[i]=='1'){
            one.push(i);
        }
    }
    console.log(one);
    let res = [];
    for(let i=0; i<boxes.length;i++){
        let count =0;
        for(let j=0; j<one.length; j++){
            count+=Math.abs(i-one[j]);
        }
        // console.log(count);
        res.push(count);
    }

    return res;
};