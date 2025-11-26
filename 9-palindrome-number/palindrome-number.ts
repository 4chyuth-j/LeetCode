function isPalindrome(x: number): boolean {
    if(x<0) return false;
    let ref = x;
    let res = 0;
    while(x>0){
        res = res*10 + x%10;
        x = Math.floor(x/10);
    }

    return ref==res;

};