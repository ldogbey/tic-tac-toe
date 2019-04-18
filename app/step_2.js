var gameModel = GameModel();
/**
     * This arrow function validates whether or not a move is legal before allowing
     * player to proceed to make a move. This is to ensure a grid is not clicked twice
     * It also checks if there is a tie in the game
     */
    validateMoveOnClick = square => {
        if (typeof board[square.target.id] == 'number') {
            makeMove(square.target.id, gameModel.playerOne);
            if (!checkTie()) makeMove(bestSpot(), gameModel.playerTwo);
        }
    }