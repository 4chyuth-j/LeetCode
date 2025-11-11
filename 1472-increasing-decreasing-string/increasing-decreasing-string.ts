function sortString(s: string): string {
     let map = new Map();
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }
    let res = '';

    let keys = [...map.keys()].sort();


    while (map.size != 0) {

        for (let i = 0; i < keys.length; i++) {
            if (map.has(keys[i])) {
                res += keys[i];
                map.set(keys[i], (map.get(keys[i])) - 1);
                if (map.get(keys[i]) == 0) {
                    map.delete(keys[i]);
                }
            }
        }


        for (let i = keys.length - 1; i >= 0; i--) {
            if (map.has(keys[i])) {
                res += keys[i];
                map.set(keys[i], (map.get(keys[i])) - 1);
                if (map.get(keys[i]) == 0) {
                    map.delete(keys[i]);
                }
            }
        }


    }

    return res;
};