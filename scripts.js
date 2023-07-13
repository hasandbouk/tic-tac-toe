// const PLAYER_X_CLASS = document.getElementsByClassName("player-1-name");
// const PLAYER_O_CLASS = document.getElementsByClassName("player-2-name");
const cell_elements = document.querySelectorAll(".cell");
const board_element = document.getElementById("board");
let current_player = "x";
let score1 = 0;
let score2 = 0;
let p1Sequence = [];
let p2Sequence = [];
cell_elements.forEach((cell)=>{
    cell.addEventListener('click', (e)=>{
        console.log(e.target.innerText)
    })
})


const WINNING_COMBITNATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];