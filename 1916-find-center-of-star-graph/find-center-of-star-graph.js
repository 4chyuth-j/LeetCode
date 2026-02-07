/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let freq = {};
    for(let item of edges){
        if(!freq[item[0]]) freq[item[0]] = 0;
        if(!freq[item[1]]) freq[item[1]] = 0;

        freq[item[0]]++;
        freq[item[1]]++;
    }

    let centre = -1;
    let count = 0;
    for(let node in freq){
        if(freq[node]>count){
            count = freq[node];
            centre = Number(node);
        }
    }

    return centre;
};