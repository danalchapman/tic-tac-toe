// Global Variables
var playerOne = new Player("playerOne", "./assets/Sun.svg");
var playerTwo = new Player("playerTwo", "./assets/Terrestrial-World.svg")
var currentGame = new Game(playerOne, playerTwo);

// Selectors
var gameBoard = document.querySelector(".game-board");
var turnCounter = document.querySelector(".player-header");
var player1Wins = document.querySelector(".player1-win-count");
var player2Wins = document.querySelector(".player2-win-count");
var announceWinner = document.querySelector(".announce-wins");
var announceDraw = document.querySelector(".announce-draw");

// Event Listeners 
window.addEventListener("load", createGame);

// Functions
// createGame (new game on refresh)

// clickBoard (player token on dom)
// for loop/conditional for tile that is placed?

// renderBoard

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