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
var announcement = document.querySelector(".announcements");

// Event Listeners 
window.addEventListener("load", createGame);
gameBoard.addEventListener("click", clickBoard);

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
            `The <img class="player-token" src="${currentGame.players[i].token}" alt="${currentGame.players[i].name}">'s Turn`
        }
    }
}

// Game Board Functions
function clickBoard(event) {
    var cellId = event.target.id; 
    if (currentGame.board[cellId] === "") {
        currentGame.setPlayerToken(cellId);
    }

    renderBoard();

    if (currentGame.gameOver || currentGame.isDraw) {
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

    showCurrentTurn();
    updatePlayerWins();
    displayAnnouncement();
}

// Post-Game Displays
function displayAnnouncement() {
    for (var i = 0; i < currentGame.players.length; i++) {
        if (currentGame.isDraw && !currentGame.gameOver) {
            announcement.innerHTML = `It's a Draw!`;
        } else if (currentGame.gameOver && currentGame.currentTurn === currentGame.players[i].name) {
            announcement.innerHTML =
            `<img class="player-token" src="${currentGame.players[i].token}" alt="${currentGame.players[i].name}"> Wins!`;
        } 
    }
}

function updatePlayerWins() {
    player1Wins.innerHTML = 
    `Wins: ${currentGame.players[0].winsCount}`;

    player2Wins.innerHTML = 
    `Wins: ${currentGame.players[1].winsCount}`;
}

// Reset Game
function triggerBoardReset() {
    currentGame.resetGame()
    announcement.innerHTML = "";
    renderBoard();
}