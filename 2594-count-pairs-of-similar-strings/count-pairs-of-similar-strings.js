/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
    let count = 0;

    for(let i=0; i<words.length-1; i++){

        let ref = new Set(words[i].split(""));

        for(let j=i+1; j<words.length; j++){
            let isSimilar = true;
            let wordRef = new Set(words[j].split(""));

            if(ref.size===wordRef.size){
                for(let c of wordRef){
                    if(!ref.has(c)){
                        isSimilar = false;
                        break;
                    }
                }
            } else {
                isSimilar = false;
            }

            if(isSimilar) count++;
        }

    }

    return count;
};