function totalMoney(n: number): number {
    let dum:number[] = [1, 2, 3, 4, 5, 6, 7];
    let res = 0;
    let i = 0;
    let ind = 0;
    let addition = 0;
    while (i < n) {
        res += dum[ind] + addition;
        if ((i + 1) % 7 == 0) {
            ind = 0;
            addition++;
        } else {
            ind++;
        }

        i++;
    }

    return res;
};