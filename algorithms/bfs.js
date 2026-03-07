import Queue from "..dataStructures/queue.js";
import {getNeighbors} from "../utils/neighbors.js";

export function bfs(grid,start,end){
    const queue=new Queue();
    const visitedNodes=[];
    queue.enqueue(start);
    start.visited=true;
    while(!queue.isEmpty()){
        const node=queue.dequeue();
        visitedNodes.push(node);
        if(node===end) return visitedNodes;
        const neighbors=getNeighbors(node,grid);
        for(const neighbour of neighbors){
            if(!neighbor.visited && !neighbor.isWall){
                neighbor.visited=true;
                neighbor.previous=node;
                queue.enqueue(neighbor);
            }
        }

    }
    return visitedNodes;
}