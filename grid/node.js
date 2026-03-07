export default class Node{
    constructor(row,col){
        this.row=row;
        this.col=col;

        this.isWall=false;
        this.distance=Infinity;
        this.visited=false;
        this.previous=null;
    }
}