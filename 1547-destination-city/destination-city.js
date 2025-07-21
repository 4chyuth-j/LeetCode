/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let map = new Set();

    for(let path of paths){
        map.add(path[0]);
    }

    for(let path of paths){
        let dest = path[1];
        if(!map.has(dest)){
            return dest;
        }
    }

    return '';
    
};