import {getNeighbors} from "../utils/neighbors.js";
export function dfs(grid,start,end){
    const stack=[start];
    const visitedNodes=[];
    while(stack.length){
        const node=stack.pop();
        if(node.visited) continue;
        node.visited=true;
        visitedNodes.push(node);
        if(node===end) return visitedNodes;
        const neighbors=getNeighbors(node,grid);
        for(const neighbor of neighbors){
            if(!neighbor.visited && !neighbor.isWall){
                neighbor.previous=node;
                stack.push(neighbor);
            }
        }
    }
    return visitedNodes;

}