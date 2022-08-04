class Game {
    constructor() {
        this.board = {
            a1: "",
            a2: "",
            a3: "",
            b1: "",
            b2: "",
            b3: "",
            c1: "",
            c2: "",
            c3: ""
        };
        this.gameOver = false;
        this.players = [];
        this.currentTurn = "playerOne";
        this.turnCount = 0;
    }

    checkPlayerTurn() { // determine currentTurn
        this.turnCount += 1;
        this.changeTurn();
    }

    changeTurn() {
        if (this.currentTurn === "playerOne") {
            this.currentTurn = "playerTwo";
        } else {
            this.currentTurn = "playerOne";
        }
    }

    setPlayerToken(cellId) { // get token from this.players
        for (var i = 0; i < this.players.length; i++) {
            if (!this.board[cellId] && this.players[i].name === this.currentTurn) {
                this.board[cellId] = this.players[i].token;
                this.checkPlayerTurn();
            }
        }
    } 
    
    checkWinCondition() {
        // check hor/vert/diag/draw methods
    }

    checkDrawCondition() {
        // check for Draw conditions
    }

    checkHorizontalWin() {
        // horizontal win conditions include
        // [[0], [1], [2]]
        // [[3], [4], [5]]
        // [[6], [7], [8]]
    }

    checkVerticalWin() {
        // vertical win conditions include
        // [[0], [3], [6]]
        // [[1], [4], [7]]
        // [[2], [5], [8]]
    }

    checkDiagonalWin() {
        // diagonal win conditions include
        // [[0], [4], [8]]
        // [[2], [4], [6]]
    }

    resetGame() {
        // timeout?? research
        // currentGame.turnCount = 0;
    }
}