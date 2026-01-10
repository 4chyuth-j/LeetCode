/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let freq = new Array(101).fill(0);
    for(let h of heights){
        freq[h]++;
    }

    let index = 0;
    let count = 0;

    for(let h=1; h<=100; h++){
        while(freq[h]>0){
            if(heights[index]!==h){
                count++;
            }

            index++;
            freq[h]--;
        }
    }
    
    return count;
};