/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors) {
    let group = 0;
    for(let i=1; i<colors.length-1; i++){
        if(colors[i-1]==colors[i+1] && colors[i-1]!==colors[i]) group++;
    }

    if(colors[1]===colors[colors.length-1] && colors[1]!=colors[0]) group++;

    if(colors[colors.length-2] === colors[0] && colors[colors.length-1]!=colors[0] ) group++;

    return group;
};