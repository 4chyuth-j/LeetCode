/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let st = [];
    for(let i=address.length-1; i>=0; i--){
        if(address[i]=='.') st.push('[.]');
        else st.push(address[i]);
    }
    let result = '';
    while(st.length!=0){
        result+=st.pop();
    }
    return result;
};