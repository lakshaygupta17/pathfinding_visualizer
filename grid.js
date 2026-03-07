import Node from "./node.js";
export function createGrid(rows,cols){
    const grid=[];
    for(let r=0;r<rows;r++){
        const row=[];
        for(let c=0;c<cols;c++){
            row.push(new Node(r,c));
        }
        grid.push(row);
    }
    return grid;
}