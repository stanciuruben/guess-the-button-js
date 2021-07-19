// GOLOBALS
let luckyNum = 0;

// DOM ELEMENTS
const InputField = document.getElementById("n-of-buttons");
const startButton = document.getElementById("start-button");
const inteface = document.getElementById("inteface");
const buttonsContainer = document.getElementById("buttons-container");

// EVENT LISTENERS
InputField.addEventListener("blur", () => {
    if(!isNaN(parseInt(InputField.value)) && parseInt(InputField.value) > 10) {
        InputField.value = "10";
    }
});

document.addEventListener("click", (e) => {
    if(e.target.id == "start-button") {
        inteface.style.display = "none";
        createButtons(InputField.value);
        luckyNum = createLuckyNum(InputField.value);
    }
    if(e.target.id.match(/\d+/)) {
        if (parseInt(e.target.id) === luckyNum) {
            endGame("game won");
        } else {
            endGame("game lost");
        }
    }
});

// FUNCTIONS
function createButtons(num) {
    for(let i = 0; i < num; i++) {
        const newButton = document.createElement("button");
        newButton.id = `${i}`;
        newButton.className = "game-button";
        newButton.innerText = `${i + 1}`;
        buttonsContainer.appendChild(newButton);
    }
}

function createLuckyNum(max) {
    return Math.round(Math.random() * max);
}

function endGame(status) {
    const finalMessage = document.createElement("h1");
    finalMessage.innerText = status.toUpperCase();
    finalMessage.className = "heading";
    buttonsContainer.innerHTML = "";
    if (status === "game won") {
        finalMessage.classList.add("success");
    } else {
        finalMessage.classList.add("danger");
    }
    buttonsContainer.appendChild(finalMessage);
}