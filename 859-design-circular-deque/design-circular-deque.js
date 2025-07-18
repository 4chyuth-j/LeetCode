class Node{
    constructor(value){
        this.value = value;
        this.next = null; 
        this.prev = null;
    }
}


/**
 * @param {number} k
 */
var MyCircularDeque = function(k) {
    this.head  = null;
    this.tail = null;
    this.size = k;
    this.currSize = 0;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
   if(this.isFull()) return false;

    let node = new Node(value);

    if(this.head == null){
        this.head = node;
        this.tail = node;
        this.currSize++;
        return true; 
    } else {
        let curr = this.head;
        this.head = node;
        this.head.next = curr;
        curr.prev = this.head;
        this.currSize++;
        return true;
    }
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
     if(this.isFull()) return false;

    let node = new Node(value);

    if(this.head == null){
        this.head = node;
        this.tail = node;
        this.currSize++;
        return true; 
    } else {

        let curr = this.tail;
        this.tail = node;
        curr.next = node;
        node.prev = curr;
        this.currSize++;
        return true;
    }
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if(this.isEmpty()) return false;

    if(this.head.next === null){
        this.head = null;
        this.tail = null;
        this.currSize--;
        return true;
    }
    let curr = this.head.next;
    this.head.next = null;
    this.head = curr;
    curr.prev = null;
    this.currSize--;
    return true;

};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if(this.isEmpty()) return false;
    if(this.head.next === null){
        this.head = null;
        this.tail = null;
        this.currSize--;
        return true;
    }
    let curr = this.tail.prev;
    this.tail = curr;
    this.tail.next = null;
    this.currSize--;
    return true;

};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if(this.isEmpty()) return -1;
    return this.head.value;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if(this.isEmpty()) return -1;
    return this.tail.value;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.currSize==0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.size == this.currSize;
};

/** 
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */