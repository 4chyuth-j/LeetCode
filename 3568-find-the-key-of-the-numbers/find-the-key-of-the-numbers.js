/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function(num1, num2, num3) {
    let s1 = makeFour(num1);
    let s2 = makeFour(num2);
    let s3 = makeFour(num3);
    let res = "";
    let ind = 0;
    for(let i=0; i<4; i++){
        let dig = Math.min(s1[ind],s2[ind],s3[ind]);
        res = res+dig;
        ind++;
    }

    return parseInt(res);

}

function makeFour(num){
    let s = String(num);
    if(s.length==4) return s;
    while(s.length!==4){
        s = "0"+s;
    }

    return s;
}