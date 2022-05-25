
const defaultText = "Card Game!";


function AddElemnt(val, i, arr) {
    const element = document.createElement("div")
    element.innerHTML = defaultText;
    element.id = i
    element.className = "card"
    const board = document.getElementById("board")
    board.appendChild(element)

    element.addEventListener(`click`, () => {
        if (idsArray.length < 2) {
            if (element.innerHTML != val) {
                element.innerHTML = val;
                idsArray.push(element.id);
                if (idsArray.length === 2) {
                    const firstElement = document.getElementById(idsArray[0]);
                    if (val == firstElement.innerHTML) {
                        alert("good!")
                        idsArray = [];

                    } else {
                        setTimeout(() => {
                            firstElement.innerHTML = defaultText;
                            element.innerHTML = defaultText;
                            idsArray = [];
                        }, 2000)
                    }
                    
                }
            }

        }

    })
}
let idsArray = [];

function shuffleCards(cards) {
    cards = cards.sort(() => Math.random() - 0.5)
}

const cards = ["🤣", "B", "C", "D", "🤣", "B", "C", "D"];

shuffleCards(cards)
cards.map(AddElemnt);
//פונקציה שמערבבת את המערך ואז שם בhtml 


function clickTwice() { }