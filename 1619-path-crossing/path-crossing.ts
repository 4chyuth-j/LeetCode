function isPathCrossing(path: string): boolean {
    let x: number = 0;
    let y: number = 0;

    let set = new Set();
    set.add(`${x}-${y}`);


    for (let i = 0; i < path.length; i++) {
        if (path[i] == "E") {
            x++
        } else if (path[i] == "W") {
            x--;
        } else if (path[i] == "N") {
            y++;
        } else {
            y--;
        }



        if (set.has(`${x}-${y}`)) {
            return true;
        }

        set.add(`${x}-${y}`);


    }


    return false;
};