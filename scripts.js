// const PLAYER_X_CLASS = document.getElementsByClassName("player-1-name");
// const PLAYER_O_CLASS = document.getElementsByClassName("player-2-name");
const cell_elements = document.querySelectorAll(".cell");
const board_element = document.getElementById("board");
let currentPlayer = "x";
let score1 = 0;
let score2 = 0;
let p1Sequence = [];
let p2Sequence = [];


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

    // cell.innerText = currentPlayer;
    fullCells.push(cell.id)
    // currentPlayer = currentPlayer === "x"? "o":"x" 
    // add check winner formula down
}

let fullCells = [];
//check for a winner
//game state
//to restart the game with the score

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

