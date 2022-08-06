// Global Variables
var playerOne = new Player("playerOne", "./assets/Sun.svg");
var playerTwo = new Player("playerTwo", "./assets/Terrestrial-World.svg");
var currentGame 

// Selectors
var gameBoard = document.querySelector(".game-board");
var boardCells = document.querySelectorAll("button");
var turnCounter = document.querySelector(".turn-counter");
var player1Wins = document.querySelector(".player1-win-count");
var player2Wins = document.querySelector(".player2-win-count");
var announcement = document.querySelector(".announce-banner");

// Event Listeners 
window.addEventListener("load", createGame);
gameBoard.addEventListener("click", clickBoard);

// Functions
// New Game
function createGame() {
    currentGame = new Game(playerOne, playerTwo);
    showCurrentTurn();
}

// Turn Display
function showCurrentTurn() {
    for (var i = 0; i < currentGame.players.length; i++) {
        if (currentGame.currentTurn === currentGame.players[i].name) {
            turnCounter.innerHTML = 
            `<h2 class="player-header">The <img class="player-token" src="${currentGame.players[i].token}" alt="${currentGame.players[i].name}">'s Turn</h2>`
        }

        if (currentGame.gameOver) {
            turnCounter.innerHTML = "";
        }
    }
}

// Game Board
function clickBoard(event) {
    var cellId = event.target.id; {
    if (currentGame.board[cellId] === "") {
        currentGame.setPlayerToken(cellId);
        }
    }

    renderBoard();

    if (currentGame.gameOver) {
        setTimeout(triggerBoardReset, 2000);
    } 
}

function renderBoard() { 
    for (var i = 0; i < boardCells.length; i++) {
        var cellId = boardCells[i].id;
        
        if (!currentGame.board[cellId]) {
            boardCells[i].innerHTML = "";
        } else {
            boardCells[i].innerHTML =
            `<img src=${currentGame.board[cellId]}>`;
        }
    }
    console.log(currentGame.currentTurn);
    console.log(currentGame.gameOver)
    console.log(currentGame.isDraw)
    showCurrentTurn();
}

// Game Over Display
function displayAnnouncement() {

}
// displayAnnoucement (show the winner or draw/update currentGame.players[i]winsCount = player1-win-count)
// announceWinner.classList.remove(".hidden")
// on a draw--
// It's a Draw!
// on a winner--
// <img class="player-token hidden" src="./assets/Sun.svg" alt="player 1 sun"> Wins!

// Reset Game
function triggerBoardReset() {
    currentGame.resetGame()
    renderBoard();
    announcement.innerText = "";
}