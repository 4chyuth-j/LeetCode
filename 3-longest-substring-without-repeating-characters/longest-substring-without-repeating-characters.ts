function lengthOfLongestSubstring(s: string): number {
    let l:number = 0;
    let r:number = 0;
    let maxLen:number = 0;
    let set = new Set();

    while(r<s.length){
        if(set.has(s[r])){
            while(set.has(s[r])){
                if(set.has(s[l])){
                    set.delete(s[l]);
                }
                l++;
            }
        }

        set.add(s[r]);
        maxLen = Math.max(maxLen,r-l+1);
        r++;
    }

    return maxLen;
};