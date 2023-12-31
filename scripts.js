// const PLAYER_X_CLASS = document.getElementsByClassName("player-1-name");
// const PLAYER_O_CLASS = document.getElementsByClassName("player-2-name");
const cell_elements = document.querySelectorAll(".cell");
const board_element = document.getElementById("board");
let currentPlayer = "x";
let score1 = 0;
let score2 = 0;
let p1Sequence = [];
let p2Sequence = [];
const player1NameInput = document.querySelector(".player-1-name");
const player2NameInput = document.querySelector(".player-2-name");
const player1Name = player1NameInput.value;
const player2Name = player2NameInput.value;
const startButton = document.getElementById("startButton");
const player1ScoreDisplay = document.getElementById("player1-score");
console.log(player1ScoreDisplay)
const player2ScoreDisplay = document.getElementById("player2-score");
const btn = document.querySelector("#resetButton");


//TODO Add functionality to startButton to retreive the player names from the input


cell_elements.forEach((cell) => {
    cell.addEventListener('click', addTic);
})



function addTic(e) {
    const cell = e.target;
    if (fullCells.includes(cell.id)) return;

    if (currentPlayer === "x") {
        cell.innerText = "x";
        p1Sequence.push(Number(cell.id));
        currentPlayer = "o";
    } else {
        cell.innerText = "o";
        p2Sequence.push(Number(cell.id));
        currentPlayer = "x";
    }

    fullCells.push(cell.id);
    const winner = checkWin();
    if (winner === "x") {
        score1++;
        updateScoreboard()
        //updateScoreboard() //scoreboard not updating
        //TODO create screen overlay with congrats player 1. Do alert for now
        alert("Congrats, Player 1! You won!");
        resetGame()
    }
    if (winner === "o") {
        score2++;
        updateScoreboard()
        //updateScoreboard() //scoreboard not updating
        alert("Congrats Player 2 !You won!")
        resetGame()
    }else if (fullCells.length === 9) {
        alert("it's a tie")
        resetGame()
    }
}


// make reset game function after every win or tie
function resetGame() {
    fullCells = [];
    currentPlayer = "x";
    p1Sequence = [];
    p2Sequence = [];
    cell_elements.forEach((cell) => {
        cell.innerText = "";
    });
}
btn.addEventListener('click', resetGame)


let fullCells = [];
//check if any of the sequences above = any sequence of the array of arrays below
function checkWin() {
    const winningSequence = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let sequence of winningSequence) {
        const [a, b, c] = sequence;
        if (p1Sequence.includes(a) && p1Sequence.includes(b) && p1Sequence.includes(c)) {
            return "x";
        }
        if (p2Sequence.includes(a) && p2Sequence.includes(b) && p2Sequence.includes(c)) {
            return "o";
        }
    }
}
//make scoreboard update after every win
function updateScoreboard() {
    player1ScoreDisplay.innerText = score1;
    player2ScoreDisplay.innerText = score2;
}