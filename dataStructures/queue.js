export default class Queue{
    constructor(){
        this.items=[];
    }
    enqueue(x){
        this.items.push(x);
    }
    dequeue(){
        return this.items.shift();
    }

    isEmpty(){
        return this.items.length===0;
    }
}