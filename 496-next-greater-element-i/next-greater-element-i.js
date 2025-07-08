/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

class Stack {
    constructor() {
        this.stack = [];
    }

    push(value) {
        this.stack.push(value);
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return null;
        }
        return this.stack.pop();
    }

    top() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return null;
        }
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    size() {
        return this.stack.length;
    }
}


var nextGreaterElement = function (nums1, nums2) {
    let size = nums2.length;

    let st = new Stack();
    let map = new Map();

    for (let i = size - 1; i >= 0; i--) {
        while (st.size() > 0 && st.top() <= nums2[i]) {
            st.pop();
        }
        if (st.isEmpty()) {

            map.set(nums2[i], -1);

        } else {
            map.set(nums2[i], st.top());
        }

        st.push(nums2[i]);
    }

    let result = [];
    for(let i=0; i<nums1.length; i++){
        result.push(map.get(nums1[i]));
    }
    return result;
};
