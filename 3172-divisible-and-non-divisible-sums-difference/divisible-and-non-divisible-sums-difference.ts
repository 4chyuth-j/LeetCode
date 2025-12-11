function differenceOfSums(n: number, m: number): number {
    let res:number =0
    
    for(let i: number = 1; i <= n; i++){
        if(i % m === 0){
            res -= i;
        } else {
            res += i;
        }
    }
    
    return res;
};