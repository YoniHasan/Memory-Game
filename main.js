const cards = ["A","B","C","A","B","C"];

function AddElemnt(v,i,arr){
const element = document.createElement("div")
element.innerHTML= v
const board = document.getElementById("board")
board.appendChild(element)
}
cards.filter(AddElemnt);