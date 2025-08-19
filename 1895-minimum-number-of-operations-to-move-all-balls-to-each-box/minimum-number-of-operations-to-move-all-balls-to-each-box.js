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
    
    let res = [];
    for(let i=0; i<boxes.length;i++){
        let count =0;
        for(let indx of one){
            count+=Math.abs(i-indx);
        }
        
        res.push(count);
    }

    return res;
};