/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let count =0;
    for(let i=1; i<=num;i++){
        let number = i;
        if(number<10 && number%2==0){
            console.log(number);
            count++
        } else {
            let strNum = `${number}`;
            strNum = strNum.split('');
            let sum=0;
            for(let i=0; i<strNum.length; i++){
                sum += Number(strNum[i]);
            }
            if(sum%2==0){
                console.log(number);
                count++;
            }
        }

    }
    return count;
};