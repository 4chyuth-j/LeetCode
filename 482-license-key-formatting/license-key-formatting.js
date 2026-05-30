/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    let str = s.split("-").join("").toUpperCase();
    let len = str.length;
    let firstGroup = len%k || k;
    let res = str.slice(0,firstGroup);

    for(let i=firstGroup; i<len; i+=k){
        res +="-" + str.slice(i,i+k);
    }

    return res;

};