// Global Variables
var playerOne = new Player("playerOne", "./assets/Sun.svg");
var playerTwo = new Player("playerTwo", "./assets/Terrestrial-World.svg");
var currentGame 

// Selectors
var gameBoard = document.querySelector(".game-board");
var boardCells = document.querySelectorAll("button");
var turnCounter = document.querySelector(".player-header");
var player1Wins = document.querySelector(".player1-win-count");
var player2Wins = document.querySelector(".player2-win-count");
var announcement = document.querySelector(".announce-banner");


// Event Listeners 
window.addEventListener("load", createGame);
gameBoard.addEventListener("click", clickBoard);

// Functions
function createGame() {
    currentGame = new Game(playerOne, playerTwo);
}

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
}

// turnCounter (change token to indicate turn)
// swap src=${} dependent on currentTurn

// displayAnnoucement (show the winner or draw/update currentGame.players[i]winsCount = player1-win-count)
// announceWinner.classList.remove(".hidden")
// on a draw--
// It's a Draw!
// on a winner--
// <img class="player-token hidden" src="./assets/Sun.svg" alt="player 1 sun"> Wins!

function triggerBoardReset() {
    currentGame.resetGame()
    renderBoard();
    announcement.innerText = "";
}