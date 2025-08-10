/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
  let res = '';
  for(let i=0; i<command.length; i++){
    if(command[i]=='(' && command[i+1]==')'){
        res+='o';
        i++;
    } else if(command[i]=='(' && command[i+1]!=')'){
        res+='al';
        i+=3;
    } else {
        res+="G";
    }
  }

  return res;  
};