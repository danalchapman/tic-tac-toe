class Game {
    constructor() {
        this.board = [0, 1, 2, 3, 4, 5, 6, 7, 8]; // id names of buttons
        this.players = []; // playerone & playertwo
        this.turnCount = 0; // turns until win
        this.gameOver = false; // gameOver === true;
        this.gameDraw = false; // gameDraw === true;
    }

    checkPlayerTurn() {
        // playerone === true/false?
        // currentPlayer = playerone/playertwo?
    }

    checkHorizontalWin() {
        // horizontal win conditions include
        // [0], [1], [2]
        // [3], [4], [5]
        // [6], [7], [8]
    }

    checkVerticalWin() {
        // vertical win conditions include
        // [0], [3], [6]
        // [1], [4], [7]
        // [2], [5], [8]
    }

    checkDiagonalWin() {
        // diagonal win conditions include
        // [0], [4], [8]
        // [2], [4], [6]
    }

    checkWinCondition() {
        // check hor/vert/diag methods
    }

    checkDrawCondition() {
        // check for Draw conditions
    }

    resetGame() {
        // timeout?? research
    }
}