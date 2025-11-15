function generate(numRows: number): number[][] {
     let res: number[][] = [[1]];

    for (let i = 1; i < numRows; i++) {
        let temp: number[] = [0, ...res[i - 1], 0];
        let row: number[] = [];

        for (let j = 0; j < res[i - 1].length + 1; j++) {
            row[j] = temp[j] + temp[j + 1];
        }

        res.push(row);
    }

    return res;
};