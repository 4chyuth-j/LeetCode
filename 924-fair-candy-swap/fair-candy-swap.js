/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    const aliceS = aliceSizes.reduce((acc,curr)=>curr+acc,0);
    const bobS = bobSizes.reduce((acc,curr)=>curr+acc,0);

    const diff = (aliceS-bobS)/2;

    let set = new Set(aliceSizes);

    for(let y of bobSizes){
        let x = y+diff;
        if(set.has(x)){
            return [x,y];
        }
    }
};