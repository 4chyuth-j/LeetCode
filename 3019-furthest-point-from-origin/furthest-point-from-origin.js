/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let l=0,r=0,blank=0;
    for(let i=0; i<moves.length; i++){
        if(moves[i]=='L') l++;
        else if(moves[i]=='R') r++;
        else if(moves[i]=='_') blank++;
    }

    if(blank==0){
        return Math.abs(l-r);
    } else if(l>=r){
        return (l+blank)-r;
    } else if(r>l){
        return (r+blank)-l;
    } else if(l==0 && r==0){
        return blank;
    }
};