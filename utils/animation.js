export function animate(visitedNodes){

visitedNodes.forEach((node,i)=>{

setTimeout(()=>{

const el=document.getElementById(`node-${node.row}-${node.col}`);

el.classList.add("visited");

},10*i);

});

}