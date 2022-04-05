const cards = ["A","B","C","A","B","C"];

function AddElemnt(v,i,arr){
const element = document.createElement("div")
element.innerHTML= v
element.id=i
element.className="card"
const board = document.getElementById("board")
board.appendChild(element)
}
shuffleCards(cards)
cards.filter(AddElemnt);
//פונקציה שמערבבת את המערך ואז שם בhtml 

function shuffleCards(cards)
{
cards= cards.sort (()=>Math.random() - 0.5)
}
