/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    // let res = s.split("");
    // let vowel = [];

    // for(let i=0; i<s.length; i++){
    //     if("aeiouAEIOU".includes(s[i])){
    //         vowel.push(s[i]);
    //     }
    // }

    // if(vowel.length==0) return s;

    // let ind=vowel.length-1;

    // for(let i=0; i<res.length; i++){
    //     if('aeiouAEIOU'.includes(res[i])){
    //         res[i] = vowel[ind];
    //         ind--;
    //     }
    // }

    // return res.join('');


    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
    let arr = s.split('');
    let start = 0, end = arr.length-1;

    while(start<end){
        while(start<end && !vowels.has(arr[start])) start++;
        while(start<end && !vowels.has(arr[end])) end--;
        [arr[start],arr[end]] = [arr[end],arr[start]];
        start++;
        end--;
    }

    return arr.join('');
    
};