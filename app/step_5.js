var gameModel = GameModel();
 /**
     * Returns a best spot that can be clicked randomly by playerTwo
     */
    bestSpot = () => {
        return playerTwoRandomMove(gameModel.board, gameModel.playerTwo).index;
    }
    /**
     * Minimax algorithm to define
     * random moves by playerTwo based on the empty grids avaialable for clicking
     */
    playerTwoRandomMove = (newBoard, player) => {
        var spots = emptySquares(newBoard);
        
        if (isGameWon(newBoard, player)) {
            return {score: -10};
        } else if (isGameWon(newBoard, gameModel.playerTwo)) {
            return {score: 10};
        } else if (spots.length === 0) {
            return {score: 0};
        }
        var moves = [];
        
        for (var i = 0; i < spots.length; i++) {
            var move = {};
            move.index = newBoard[spots[i]];
            newBoard[spots[i]] = player;
            
            if (player == gameModel.playerTwo) {
                var result = playerTwoRandomMove(newBoard, gameModel.playerOne);
                move.score = result.score;
            } else {
                var result = playerTwoRandomMove(newBoard, gameModel.playerTwo);
                move.score = result.score;
            }
            
            newBoard[spots[i]] = move.index;
            
            moves.push(move);
        }
        
        var bestMove;
        if (player === gameModel.playerTwo) {
            var bestScore = -10000;
            for (var i = 0; i < moves.length; i++) {
                if (moves[i].score > bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        } else {
            var bestScore = 10000;
            for (var i = 0; i < moves.length; i++) {
                if (moves[i].score < bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        }
        
        return moves[bestMove];
    }