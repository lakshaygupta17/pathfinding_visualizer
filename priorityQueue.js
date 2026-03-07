export default class PriorityQueue{

    constructor(){
        this.values=[];
    }
    enqueue(node,priority){
        this.values.push({node,priority});
        this.values.sort((a,b)=>a.priorty-b.priority);
    }
    dequeue(){
        return this.values.shift().node;
    }
    isEmpty(){
        return this.values.length===0;
    }
}