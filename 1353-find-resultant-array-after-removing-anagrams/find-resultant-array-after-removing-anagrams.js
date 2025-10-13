/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    if(words.length==0) return words

    for(let i=0; i<words.length-1; i++){
        if(isAnagram(words[i],words[i+1])){
            console.log(`${words[i]} and ${words[i+1]} are anagram`);
            words.splice(i+1,1);
            i--;
        }
    }

    return words;
    
};

function isAnagram(word1,word2){
    
    let map = new Map();
    for(let i=0; i<word1.length; i++){
        map.set(word1[i],(map.get(word1[i]) || 0) + 1 );
    }
    

    for(let i=0; i<word2.length; i++){
        if(map.has(word2[i])){

            if(map.get(word2[i])==0){
                return false;
            }

            map.set(word2[i],(map.get(word2[i]) - 1 ));
        } else {
            return false;
        }
    }
    

    for(let val of map.values()){
        if(val!=0) return false;
    }

    return true;
}