/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function(nums) {
    let points = new Set();

    const countPoints = (car)=>{
        for(let i=car[0]; i<=car[1]; i++){
            if(!points.has(i)){
              points.add(i);
            }
        }
    }

    for(let car of nums){
        countPoints(car);
    }

    return points.size;

};