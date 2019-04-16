var gameModel = GameModel();
$ (() => {
    /**
     * This function will clear/create board and 
     * create an array of 9 element to represent the 9 grids and set
     * a click event listener on each cell
     */
    startGame = () => {
        $('.close').click();
        gameModel.board = Array.from(Array(9).keys());
        gameModel.cells.forEach((cell) => {
            cell.text('');
            cell.css('background-color', '');
            cell.click(validateMoveOnClick);
        });
    }

    /**
     * Initializing the game on page load
     */
    startGame();
});