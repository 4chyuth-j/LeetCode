/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let arr = title.split(' ');
    let res = '';
    for(let i=0; i<arr.length; i++){
        if(arr[i].length<=2){
            res+=`${arr[i].toLowerCase()} `;
        } else {
            let cap = '';
            for(let j=0; j<arr[i].length; j++){
                if(j==0){
                   cap+=arr[i][j].toUpperCase(); 
                }else{
                  cap+=arr[i][j].toLowerCase();
                }
            }

            res+=`${cap} `;
        }
    }

    return res.trim();
};