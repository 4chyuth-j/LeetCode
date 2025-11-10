/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let map = new Map();
    for(let i=0; i<s.length; i++){
        map.set(s[i],(map.get(s[i])||0)+1);
    }
    let res = '';
    let small = true;
    let keys = [...map.keys()].sort();
    

    while(map.size!=0){
        if(small){
            for(let i=0; i<keys.length; i++){
                if(map.has(keys[i])){
                    res +=keys[i];
                    map.set(keys[i],(map.get(keys[i]))-1);
                    if(map.get(keys[i])==0) {
                        map.delete(keys[i]);
                    }
                }
            }
                    small = false;
        } else {
            for(let i=keys.length-1; i>=0; i--){
                if(map.has(keys[i])){
                    res +=keys[i];
                    map.set(keys[i],(map.get(keys[i]))-1);
                    if(map.get(keys[i])==0) {
                        map.delete(keys[i]);
                    }
                }
            }
                    small = true;
        }
    }

    return res;
};