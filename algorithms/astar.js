import PriorityQueue from "../dataStructures/priorityQueue.js";
import {getNeighbors} from "../utils/neighbors.js";
import {manhattan} from "../utils/heuristics.js";

export function astar(grid,start,end){

const pq=new PriorityQueue();

start.distance=0;

pq.enqueue(start,0);

const visitedNodes=[];

while(!pq.isEmpty()){

const node=pq.dequeue();

if(node.visited) continue;

node.visited=true;

visitedNodes.push(node);

if(node===end) return visitedNodes;

const neighbors=getNeighbors(node,grid);

for(const neighbor of neighbors){

if(neighbor.isWall) continue;

const g=node.distance+1;

const f=g+manhattan(neighbor,end);

if(g<neighbor.distance){

neighbor.distance=g;

neighbor.previous=node;

pq.enqueue(neighbor,f);

}

}

}

return visitedNodes;

}