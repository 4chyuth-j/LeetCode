/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    

    function getChange(start){
        let count=0;
        for(let i=0; i<s.length; i++ ){
            if(s[i]!=start)count++;

            start = start===0?1:0;
        }

        return count;
    }   

    return Math.min(getChange(0),getChange(1));
};

