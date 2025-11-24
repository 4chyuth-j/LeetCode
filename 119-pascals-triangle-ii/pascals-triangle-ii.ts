function getRow(rowIndex: number): number[] {
    let pasc = [[1]];
    if(rowIndex==0){
        return pasc[0]
    }
    for(let i=1;i<=rowIndex; i++){
        let dum = [0,...pasc[i-1],0];
        let res = [];
        for(let j=0; j<pasc[i-1].length+1; j++){
            res[j] = dum[j]+dum[j+1];
        }
        pasc.push(res);
    }
    return pasc[rowIndex];
    
};