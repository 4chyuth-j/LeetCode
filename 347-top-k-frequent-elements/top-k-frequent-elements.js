/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */



class priQueue{
    constructor(){
        this.heap = [];
    }

    isEmpty(){
        return this.heap.length == 0;
    }

    getLen(){
        return this.heap.length;
    }

    getParent(ind){
        return Math.floor((ind-1)/2);
    }

    leftChild(ind){
        return (ind*2)+1;
    }

    rightChild(ind){
        return (ind*2)+2;
    }

    swap(ind1,ind2){
        [this.heap[ind1],this.heap[ind2]] = [this.heap[ind2],this.heap[ind1]];
    }

    insert(key,value){
        let elem = {key,value};
        this.heap.push(elem);
        this.upheap(this.getLen()-1);
    }

    upheap(ind){
        if(ind == 0) return ;
        let parInd = this.getParent(ind);
        if(this.heap[parInd].value < this.heap[ind].value){
            this.swap(parInd,ind);
            this.upheap(parInd);
        }
    }

    remove(){
        if(this.isEmpty()) return null;
        let elem = this.heap[0];
        let last = this.heap.pop();

        if(this.getLen()>0){
            this.heap[0] = last;
            this.downheap(0);
        }

        return elem.key;

    }

    downheap(ind){
        let max = ind;
        let left = this.leftChild(ind);
        let right = this.rightChild(ind);

        if(left<this.getLen() && this.heap[left].value>this.heap[max].value){
            max = left;
        }

        if(right<this.getLen() && this.heap[right].value> this.heap[max].value){
            max = right;
        }

        if(max!= ind){
            this.swap(max,ind);
            this.downheap(max);
        }
    }



}




var topKFrequent = function(nums, k) {
    let map = new Map();
    for(let item of nums){
        map.set(item,(map.get(item) || 0)+1 );
    }

    return topFreq(map,k);

};

function topFreq(map,k){
    let result = [];
    let pq = new priQueue();
    for(let [key,value] of map){
        pq.insert(key,value);
    }
    while(k>0 && !pq.isEmpty()){
        result.push(pq.remove());
        k--;
    }

    return result;
}

