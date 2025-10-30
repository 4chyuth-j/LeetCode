function totalFruit(fruits: number[]): number {
    let l: number = 0;
    let r: number = 0;
    let max: number = 0;
    let map: Map<number, number> = new Map();
    while (r < fruits.length) {

        map.set(fruits[r], (map.get(fruits[r]) || 0) + 1);


        while (map.size > 2) {
            if (map.get(fruits[l])>1) {
                map.set(fruits[l], (map.get(fruits[l]) - 1));
            } else {
                map.delete(fruits[l]);
            }
            l++
        }

        max = Math.max(max,r-l+1);

        r++

    }

    return max;
};