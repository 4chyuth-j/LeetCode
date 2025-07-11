/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {

    let left = [];
    let right = [];
    let stack = [];
    

    for(let i=0; i<heights.length; i++){
        while(stack.length>0 && heights[stack[stack.length-1]]>=heights[i]){
            stack.pop();
        }

        if(stack.length==0){
            left[i] = -1;
        } else {
            left[i] = stack[stack.length-1];
        }

        stack.push(i);

    }

    while(stack.length!=0){
        stack.pop();
    }


    for(let i=heights.length-1; i>=0; i--){
        while(stack.length>0 && heights[stack[stack.length-1]]>= heights[i]){
            stack.pop();
        }

        if(stack.length==0){
            right[i] = heights.length;
        } else {
            right[i] = stack[stack.length-1];
        }

        stack.push(i);
    }
    

    let maxArea = 0;
    
    for(let i=0; i<heights.length; i++){
        let width =  right[i] - left[i] -1
        let area = heights[i] * width;
        maxArea  =  Math.max(maxArea,area);
    }

    return maxArea;


};















