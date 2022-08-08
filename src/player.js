class Player {
    constructor(playerName, playerToken) {
        this.name = playerName;
        this.token = playerToken;
        this.winsCount = 0;
    }

    increaseWins() {
        this.winsCount += 1;
    }

    storeWins() {
        var winsToStore = JSON.stringify(this.winsCount);
        localStorage.setItem(`stored-wins-${this.name}`, winsToStore);
    }

    getWins() {
        var retrievedWins = localStorage.getItem(`stored-wins-${this.name}`);
        var parsedWins = JSON.parse(retrievedWins);
        return parsedWins;
    }
}