/**
 * @param {string} s
 * @param {character} x
 * @param {character} y
 * @return {string}
 */
var rearrangeString = function(s, x, y) {
     let freq = new Array(26).fill(0);

     let res = "";

     for(let c of s){
        freq[c.charCodeAt(0)-97]++;
     }

     while(freq[y.charCodeAt(0)-97]>0){
        res+=`${y}`;
        freq[y.charCodeAt(0)-97]--;
     }

     for(let i=0; i<26; i++){
        res+=String.fromCharCode(i+97).repeat(freq[i]);
     }   

     return res;
};