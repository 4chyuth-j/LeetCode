/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */




var nextGreaterElement = function (nums1, nums2) {
    let size = nums2.length;

    let st = [];
    let map = new Map();

    for (let i = size - 1; i >= 0; i--) {
        while (st.length > 0 && st[st.length-1] <= nums2[i]) {
            st.pop();
        }
        if (st.length==0) {

            map.set(nums2[i], -1);

        } else {
            map.set(nums2[i], st[st.length-1]);
        }

        st.push(nums2[i]);
    }

    let result = [];
    for(let i=0; i<nums1.length; i++){
        result.push(map.get(nums1[i]));
    }
    return result;
};
