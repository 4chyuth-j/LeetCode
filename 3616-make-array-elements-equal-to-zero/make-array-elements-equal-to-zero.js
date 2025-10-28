/**
 * @param {number[]} nums
 * @return {number}
 */
var countValidSelections = function(nums) {
    if(nums.length === 1 && nums[nums.length - 1] === 0){
        return 2
    }
    
    let left = 0
    let right = 0
    let hashL = {}
    let hashR = {}
    let rs = 0
    
    for(let i = 0; i < nums.length; i++){
        const cur = nums[i]
        if(cur == 0){
            hashL[i] = left
        }
        
        left += cur
    }
    
    for(let i = nums.length - 1; i >= 0; i--){
        const cur = nums[i]
        if(cur == 0){
            hashR[i] = right
        }
        
        right += cur
    }
    
     
    for (const key in hashL) {
        const l = hashL[key]
        const r = hashR[key]
        
        if (l === r){
            rs += 2
        } else if(Math.abs(l - r) == 1){
            rs++
        }
    }


    return rs
};