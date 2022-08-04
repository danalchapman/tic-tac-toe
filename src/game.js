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

    checkPlayerTurn() {
        this.turnCount += 1;
        this.checkDrawCondition();
        this.changeTurn();
    }

    changeTurn() {
        if (this.currentTurn === "playerOne") {
            this.currentTurn = "playerTwo";
        } else {
            this.currentTurn = "playerOne";
        }
    }

    setPlayerToken(cellId) {
        for (var i = 0; i < this.players.length; i++) {
            if (!this.board[cellId] && this.players[i].name === this.currentTurn) {
                this.board[cellId] = this.players[i].token;
                this.checkPlayerTurn();
            }
        }
    } 
    
    checkWinCondition() {
        var winningToken = "";

        this.checkHorizontalWin();
        this.checkVerticalWin();
        this.checkDiagonalWin();

        for (var i = 0; i < this.players.length; i++) {
            winningToken = this.players[i].token;
            this.players[i].winsCount += 1;
            currentGame.gameOver = true;
        }
    }

    checkHorizontalWin() { 
        if (this.board.a1 === this.board.a2 && this.board.a2 === this.board.a3) {
            return this.board.a1;
        } else if (this.board.b1 === this.board.b2 && this.board.b2 === this.board.b3) {
            return this.board.b1;
        } else if (this.board.c1 === this.board.c2 && this.board.c2 === this.board.c3) {
            return this.board.c1;
        } else {
            return "";
        }
    }
    
    checkVerticalWin() {
        if (this.board.a1 === this.board.b1 && this.board.b1 === this.board.c1) {
            winningToken = this.board.a1;
        } else if (this.board.a2 === this.board.b2 && this.board.b2 === this.board.c2) {
            winningToken = this.board.a2;
        } else if (this.board.a3 === this.board.b3 && this.board.b3 === this.board.c3) {
            winningToken = this.board.a3;
        } else {
            return "";
        }
    }
    
    checkDiagonalWin() {
        if (this.board.a1 === this.board.b2 && this.board.b2 === this.board.c3) {
            winningToken = this.board.a1;
        } else if (this.board.a3 === this.board.b2 && this.board.b2 === this.board.c1) {
            winningToken = this.board.a3;
        } else {
            return "";
        }
    }

    checkDrawCondition() {
        if (this.turnCount > 8) {
            currentGame.gameOver = true;
        }
    }
    
    resetGame() {
        // timeout?? research
        // currentGame.turnCount = 0;
    }
}