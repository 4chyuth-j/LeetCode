/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
     let map = new Map();
    let bench = Math.sqrt(area);
    let w = 1;
    while(w<=bench){
        let l = area/w;
        if(l%1==0){
            map.set(l-w,[l,w]);
        }
        w++;
    }

    let min = Infinity;

    for(let key of map.keys()){
        if(key<=min){
            min = key;
        }
    }

    return map.get(min);

};