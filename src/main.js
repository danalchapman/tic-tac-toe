// Global Variables
var playerOne = new Player("playerOne", "./assets/Sun.svg");
var playerTwo = new Player("playerTwo", "./assets/Terrestrial-World.svg");
var currentGame 

// Selectors
var gameBoard = document.querySelector(".game-board");
var turnCounter = document.querySelector(".player-header");
var player1Wins = document.querySelector(".player1-win-count");
var player2Wins = document.querySelector(".player2-win-count");
var announceWinner = document.querySelector(".announce-wins");
var announceDraw = document.querySelector(".announce-draw");

// Event Listeners 
window.addEventListener("load", createGame);
// gameBoard.addEventListener("click", clickBoard);

// Functions
function createGame(playerOne, playerTwo) {
    currentGame = new Game(playerOne, playerTwo);
    currentGame.players.push(playerOne, playerTwo);
}

// function clickBoard(event) {
//     console.log(currentGame)
//     console.log(Object.values(currentGame.board))
//     var cellId = event.target.id; {
//     if (currentGame.board[cellId] === "") {
//         currentGame.setPlayerToken(cellId);
//         }
//     }
//     console.log(currentGame)
//     console.log(Object.values(currentGame.board))
//     renderBoard();
// }

// function renderBoard() {
//     gameBoard.innerHTML = "";

//     for (var i = 0; i < currentGame.players.length; i++) {
//         var playerTileToken = "./assets/Sun.svg";
        
//         if (currentGame.players[i].token === playerTileToken) {
//             playerTileToken = "./assets/Terrestrial-World.svg";
//         }

//         gameBoard.innerHTML += 
//         `
        
//         <img class="player-token" src=${playerTileToken} alt="player 1 sun">`;
//     }

// }

// turnCounter (change token to indicate turn)
// swap src=${} dependent on currentTurn

// displayWinner (show the winner/invoke updateWinCount)
// announceWinner.classList.remove(".hidden")

// updateWinCount (increase win count on page)

// displayDraw (show the Draw message)
// announceDraw.classList.remove(".hidden")

function triggerBoardReset() {
    setTimeout(game.resetGame(), 2000);
}