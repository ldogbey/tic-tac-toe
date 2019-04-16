var gameModel = GameModel();
/**
     * Checks if a game is won and return an object of the player that won or null if no wins
     */
    isGameWon = (updatedBoard, player) => {
        var plays = updatedBoard.reduce((a, e, i) => (e === player) ? a.concat(i) : a, []);
        var done = null;
        
        for (let [i, win] of gameModel.wins.entries()) {
            if (win.every(elem => plays.indexOf(elem) > -1)) {
                done = {index: i, player: player};
                break;
            }
        }
        
        return done;
    }
    /**
     * Indicates with different colors the grids that represents a win based on the player.
     * playerOne is represented by blue and playerTwo by yellow.
     * Prevents other cells from being clicked and declares the winner
     */
    gameOver = (done) => {
        for (let i of gameModel.wins[done.index]) {
            $ ('#' + i).css('background-color', (done.player == gameModel.playerOne ? 'blue' : 'yellow'));
        }
        $ ('.cell').off();
        declareWinner(done.player == gameModel.playerOne ? "Player One Won!" : "Player Two Won!");
    }
    /**
     * Declares the winner of the game
     */
    declareWinner = (winner) => {
        $ ('.text').text(winner);
        // $ ('.endgame').css('display', 'block');
        $('#endGameModal').modal({
            backdrop: 'static',
            keyboard: false
        })
    }

    /**
     * Checks tie in the game and set the bacgkround to green and prevent any other
     * grid from being clicked
     * @returns true/false
     */
    checkTie = () => {
        if (emptySquares().length == 0) {
            $ ('.cell').off().css('background-color', 'green');
            declareWinner("Tie Game!");
            return true;
        }
        return false;
    }