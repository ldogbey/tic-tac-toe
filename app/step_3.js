var gameModel = GameModel();
/**
     * Returns all grids that are empty(legal moves available) and available to be clicked
     */
    emptySquares = () => {
        return gameModel.board.filter(s => typeof s == 'number');
    }