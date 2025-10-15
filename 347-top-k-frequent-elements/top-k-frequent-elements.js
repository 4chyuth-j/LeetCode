/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

 class MyPriorityQueue{
    constructor(){
        this.queue = [];
        
    }

    getLength(){
        return this.queue.length;
    }

    isEmpty(){
        return this.queue.length == 0;
    }

    enqueue(element){
        if(this.isEmpty()){
            this.queue.push(element)
        } else {
            let added = false;
            for(let i=0; i<this.getLength(); i++){
                if(element[1]>this.queue[i][1]){
                    this.queue.splice(i,0,element);
                    added = true;
                    break;
                }
            }

            if(added==false){
                this.queue.push(element);
            }
        }
    }

    dequeue(){
        let elem = this.queue.shift();
        return elem[0];
    }


 }




var topKFrequent = function(nums, k) {
    let map = new Map();
    let res = [];
    for(let item of nums){
        map.set(item,(map.get(item) || 0)+1 );
    }

    let pQueue = new MyPriorityQueue();

    for(let [key,val] of map){
        pQueue.enqueue([key,val]);
    }

    while(k>0 && !pQueue.isEmpty()){
        res.push(pQueue.dequeue());
        k--;
    }

    return res;

    

};



