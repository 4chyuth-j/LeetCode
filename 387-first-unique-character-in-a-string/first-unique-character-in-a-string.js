/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let freqMap = new Map();
    let queue = [];
    for(let i=0; i<s.length; i++){
        if(freqMap.has(s[i])){
            let count = freqMap.get(s[i]);
            freqMap.set(s[i],count+1);
        } else {
            freqMap.set(s[i],1);
            queue.push(i);
        }
    }

    
    while(queue.length!=0){
        let ind = queue[0];
        let item = freqMap.get(s[ind]);
        if(item==1){
            return queue[0];
        } else {
            queue.shift()
        }
    }
    return -1;
};