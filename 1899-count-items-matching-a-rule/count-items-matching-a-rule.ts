function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
    const index: {[key: string]: number} = {
        "type": 0,
        "color": 1,
        "name": 2
    };
    
    const i: number = index[ruleKey];
    let count: number = 0;
    
    for(const item of items){
        if(item[i] === ruleValue){
            count++;
        }
    }
    
    return count;
}