// Methods needed:
// Check for win conditions: 3 horizontally, vertically, or diagonally (checkWin) (then invoke resetGame)
// Check for draw condition (checkDraw) (then invoke resetGame)
// Reset game (resetGame)
// Track Turns

class Game {
    constructor() {
        this.board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.turnCount = 0;
        this.gameOver = false;
        this.gameDraw = false;
        this.players = [];
    }
}