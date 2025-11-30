/**
 * Definition for isBadVersion()
 * 
 * @param version number
 * @return boolean whether the version is bad
 */

type IsBadVersion = (version: number) => boolean;

/**
 * @param isBadVersion function
 * @return function
 */
const solution = (isBadVersion: IsBadVersion) => {
    /**
     * @param n Total versions
     * @return The first bad version
     */
    return (n: number): number => {
        let left = 1;
        let right = n;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    };
};

export default solution;
