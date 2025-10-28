function countValidSelections(nums: number[]): number {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            if (isValid(i, [...nums], true)) {
                res++;
            }
            if (isValid(i, [...nums], false)) {
                res++;
            }
        }
    }

    return res;
};


function isValid(ind: number, arr: number[], moveL: boolean): boolean {

    let n = arr.length;

    while (ind >= 0 && ind < n) {

        if (arr[ind] > 0) {

            arr[ind]--;
            moveL = !moveL;
        }
        if (moveL) {
            ind--;
        } else {
            ind++
        }
    }

    for (let i = 0; i < n; i++) {
        if (arr[i] != 0) {
            return false;
        }
    }

    return true;
}