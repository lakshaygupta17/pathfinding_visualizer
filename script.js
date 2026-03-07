import {createGrid} from "./grid/grid.js";
import {bfs} from "./algorithms/bfs.js";
import {dfs} from "./algorithms/dfs.js";
import {dijkstra} from "./algorithms/dijkstra.js";
import {astar} from "./algorithms/astar.js";
import {animate} from "./utils/animation.js";

const rows=20;
const cols=50;

const grid=createGrid(rows,cols);

const gridElement=document.getElementById("grid");

function renderGrid(){

for(let r=0;r<rows;r++){

for(let c=0;c<cols;c++){

const node=document.createElement("div");

node.className="node";

node.id=`node-${r}-${c}`;

gridElement.appendChild(node);

}

}

}

renderGrid();

document.getElementById("visualizeBtn").onclick=()=>{

const algorithm=document.getElementById("algorithm").value;

const start=grid[10][5];

const end=grid[10][40];

let visited;

if(algorithm==="bfs") visited=bfs(grid,start,end);
if(algorithm==="dfs") visited=dfs(grid,start,end);
if(algorithm==="dijkstra") visited=dijkstra(grid,start,end);
if(algorithm==="astar") visited=astar(grid,start,end);

animate(visited);

};