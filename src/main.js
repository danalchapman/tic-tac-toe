// Global Variables
var playerOne = new Player("playerOne", "./assets/Sun.svg");
var playerTwo = new Player("playerTwo", "./assets/Terrestrial-World.svg");
var currentGame 

// Selectors
var gameBoard = document.querySelector("#game-board");
var boardCells = document.querySelectorAll("button");
var turnCounter = document.querySelector("#turn-counter");
var announcement = document.querySelector("#announcements");
var player1Wins = document.querySelector("#player1-win-count");
var player2Wins = document.querySelector("#player2-win-count");

// Event Listeners 
window.addEventListener("load", createGame);
gameBoard.addEventListener("click", handleBoardClick);

// Functions
function createGame() {
    currentGame = new Game(playerOne, playerTwo);
    
    showCurrentTurn();
    currentGame.players[0].getWins();
    currentGame.players[1].getWins();
}

function showCurrentTurn() {
    for (var i = 0; i < currentGame.players.length; i++) {
        if (currentGame.currentTurn === currentGame.players[i].name) {
            turnCounter.innerHTML = 
            `The <img class="player-token" src="${currentGame.players[i].token}" alt="${currentGame.players[i].name}">'s Turn`;
        }
    }
}

function handleBoardClick(event) {
    var cellId = event.target.id; 
    if (currentGame.board[cellId] === "") {
        currentGame.setPlayerToken(cellId);
    }

    renderBoard();

    if (currentGame.gameOver || currentGame.isDraw) {
        setTimeout(triggerBoardReset, 4000);
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

function displayAnnouncement() {
    for (var i = 0; i < currentGame.players.length; i++) {
        if (currentGame.isDraw && !currentGame.gameOver) {
            announcement.innerHTML = 
            `<p>It's a Draw!</p>
            <p class="banner-alert">New game starting shortly. . .</p>`;
        } else if (currentGame.gameOver && currentGame.currentTurn === currentGame.players[i].name) {
            announcement.innerHTML =
            `<p><img class="player-token" src="${currentGame.players[i].token}" alt="${currentGame.players[i].name}"> Wins!</p>
            <p class="banner-alert">New game starting shortly. . .</p>`;
        } 
    }
}

function updatePlayerWins() {
    player1Wins.innerHTML = 
    `Wins: ${currentGame.players[0].winsCount}`;

    player2Wins.innerHTML = 
    `Wins: ${currentGame.players[1].winsCount}`;
}

function triggerBoardReset() {
    currentGame.resetGame();
    announcement.innerHTML = "";

    renderBoard();
}