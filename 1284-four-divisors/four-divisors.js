/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    let sum = 0

    for(let i=0; i<nums.length; i++){
            sum+=hasFourDivisors(nums[i]);
        
    }

    return sum;
};

function hasFourDivisors(num){
    const root = Math.round(Math.cbrt(num));
    if(root*root*root==num && isPrime(root)){
        return 1+root+root*root+num;
    }
    for(let i=2; i*i<=num; i++){
        if(num%i===0){
            const other = Math.floor(num/i);
            if(i!=other && isPrime(i) && isPrime(other)){
                return 1+other+i+num;
            }
            return 0;
        }
    }

    return 0;
}


function isPrime(num){
    if(num<2) return false;

    for(let i=2; i*i<=num; i++){
        if(num%i==0) return false;
    }

    return true;
}