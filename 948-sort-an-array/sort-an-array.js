/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {

   mergeSort(nums,0,nums.length-1); 
   return nums;
};

function mergeSort(arr,start,end){
    if(start<end){
        let mid = Math.floor((start+end)/2);
        mergeSort(arr,start,mid);
        mergeSort(arr,mid+1,end);

        merge(arr,start,mid,end);
    }
    
}

function merge(arr,start,mid,end){
    let temp = [];
    let i=start, j = mid+1;
    while(i<=mid && j<=end){
        if(arr[i]<arr[j]){
            temp.push(arr[i++]);
        } else {
            temp.push(arr[j++]);
        }
    }

    while(i<=mid){
        temp.push(arr[i++]);
    }

    while(j<=end){
        temp.push(arr[j++]);
    }

    for(let k=0; k<temp.length; k++){
        arr[start+k] = temp[k];
    }
}

