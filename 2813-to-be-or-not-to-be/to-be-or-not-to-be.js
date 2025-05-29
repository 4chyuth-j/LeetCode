/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
   return {
        inVal:val,
        toBe(outVal){
            if(outVal === this.inVal ){
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },

        notToBe(outVal){
            if(outVal !== this.inVal){
                return true;
            } else {
                throw new Error("Equal");
            }
        }

   } 
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */