/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    if(s.length<=2) return true;

    let i = 0 , j = s.length -1;

    while(i<=j){
        if(s[i]==s[j]){
            i++;
            j--;
        } else {
            const lCheck = checkPal(i+1,j);
            const rCheck = checkPal(i,j-1);

            if(lCheck || rCheck){
                return true;
            } else {
                return false;
            }

        } 
    }

    function checkPal(l,r){
        while(l<=r){
            if(s[l]==s[r]){
                l++;
                r--;
            } else {
                return false;
            }
        }
        return true;
    }
    
    return true;

};

