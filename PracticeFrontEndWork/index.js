let count = 1;
let buttons = document.querySelectorAll(".box")
let game = document.querySelector(".container")
let arr = [[null, null, null], [null, null, null], [null, null, null]];
console.log(buttons)
for (let index = 0; index < buttons.length; index++) {
    const button = buttons[index];
    button.addEventListener("click", () => {
        let currentPayer = count%2!=0?'Player A':'Player B'
        if (currentPayer === 'Player A') {
            button.textContent = "X";
        } else {
            button.textContent = "0";
        }
        button.disabled = true
        console.log(`${~~(index / 3)}${index % 3}`)
        arr[~~(index / 3)][index % 3] = button.textContent
        if (foundWinner()) {
            buttons.forEach(
                (button) => {
                    button.disabled = true
                }
            )
            let newTextElement = document.createElement("div")
            newTextElement.className = "result"
            let newInnerChild = document.createElement("p")
            newInnerChild.innerText = `${currentPayer} has won the match`
            newTextElement.appendChild(newInnerChild)
            game.prepend(newTextElement)
        }
        count++;
    })
}

function foundWinner() {
    let foundWinner = false;
    arr.forEach((elmArr) => {
        if ((elmArr[0] != null && elmArr[1] != null && elmArr[2] != null) && (elmArr[0] == elmArr[1] && elmArr[1] == elmArr[3])) {
            return true;
        }
    })
    for (let j = 0; j < 3; j++) {
        if (arr[0][j] != null && arr[1][j] != null && arr[2][j] != null && (arr[0][j] == arr[1][j] && arr[1][j] == arr[2][j])) {
            return true;
        }
    }
    if (((arr[0][0] != null && arr[1][1] != null && arr[2][2] != null) &&
        (arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2])) ||
        ((arr[0][2] != null && arr[1][1] != null && arr[2][0] != null) &&
            (arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0]))) {
        return true
    }
    return foundWinner
}
