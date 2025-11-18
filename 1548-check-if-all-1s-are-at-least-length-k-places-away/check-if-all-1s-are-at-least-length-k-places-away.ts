function kLengthApart(nums: number[], k: number): boolean {
    let count = 0;
    let oneCount = 0

    for(let i=0; i<nums.length; i++){
        if(nums[i]==0){
            count++;
        } else {
            if(i==0 && nums[i]==1){ 
                oneCount++;
                continue;
            }

            if(oneCount==0){
                count = 0;
                oneCount++;
                continue;
            }

            oneCount++;

            if(count<k){
                return false;
            } else {
                count = 0;
            }
        }
    }

    return true;
};