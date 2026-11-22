/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    let lastChar = "";
    let str = ""
    let count = 0;
    for(let c of s){
        if(lastChar!==c){
            str+=c;
            count++;
            if(count>2) return false;
        }

        lastChar = c;
    }

    if(str[0]=="a"){
        return true;
    } else if(str[0]==="b" && str[str.length-1]==="b"){
        return true;
    } else {
        return false;
    }
};