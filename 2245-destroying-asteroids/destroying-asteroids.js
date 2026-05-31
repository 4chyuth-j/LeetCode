/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
    asteroids.sort((a,b)=>a-b);
    let sum = mass;
    for(let weight of asteroids){
        if(sum<weight) return false;
        sum+=weight;
    }

    return true;
    
};