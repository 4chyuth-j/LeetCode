
/**
 * @param {number[]} stones
 * @return {number}
 */

var lastStoneWeight = function(stones) {

    class MaxHeap{
    constructor(){
        this.heap = [];
    }

    getLen(){
        return this.heap.length;
    }

    swap(ind1,ind2){
        [this.heap[ind1],this.heap[ind2]] = [this.heap[ind2],this.heap[ind1]];
    }

    insert(val){
        this.heap.push(val);
        if(this.heap.length===1) return;

        this.bubbleUp(this.heap.length-1);
    }

    bubbleUp(ind){
        if(ind===0) return;
        let parent = Math.floor((ind-1)/2);
        if(this.heap[parent]<this.heap[ind]){
            this.swap(parent,ind);
            this.bubbleUp(parent);
        }
    }

    delete(){
        if(this.getLen()<=0) return ;
        let item = this.heap[0];
        let last = this.heap.pop();

        if(this.heap.length!=0){
            this.heap[0] = last;
            this.bubbleDown(0);
        }

        return item;

    }

    bubbleDown(ind){
        let max = ind;
        let left = 2*ind+1;
        let right = 2*ind+2;
        if(left<this.heap.length && this.heap[left]>this.heap[max]) max = left;
        if(right<this.heap.length && this.heap[right]>this.heap[max]) max = right;
        if(max!=ind){
            this.swap(max,ind);
            this.bubbleDown(max);
        }
    }
}




    let heap = new MaxHeap();
    for(let item of stones){
        heap.insert(item);
    }

    while(heap.getLen()>1){
        let stone1 = heap.delete();
        let stone2 = heap.delete();

        if(stone1!=stone2){
            let newStone = Math.abs(stone1-stone2);
            heap.insert(newStone);
        }
    }

    return heap.getLen()===1? heap.delete(): 0;
};















