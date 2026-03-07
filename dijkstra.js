import PriorityQueue from "../dataStructures/priorityQueue.js";
import {getNeighbours} from "../utils/neighbors.js";

export function dijkstra(grid,start,end){

    const pq=new PriorityQueue();
    start.distance=0;
    pq.enqueue(start,0);
    const visitedNotes=[];
    while(!pq.isEmpty()){
        const node=pq.dequeue();
        if(node.visited) continue;
        node.visited=true;
        visitedNodes.push(node);
        if(node===end) return visitedNodes;
        const neighbors=getNeighbors(node.grid);
        for(const neighbor of neighbors){
            if(neighbor.isWall) continue;
            const dist=node.distance+1;
            if(dist<neighbor.distance){
                neighbor.distance=dist;
                neighbor.previous=node;
                pq.enqueue(neighbor,dist);
            }
        }
    }
    return visitedNodes;
}