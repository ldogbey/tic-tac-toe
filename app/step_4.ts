import { GameModel } from "./step_1";
import { isMoveLegal } from "./step_2";

/**
 * Makes a move for a player and updates the postion in the data structure taken by player
 * @param selectedCell selected cell
 * @param player player that made the move
 * @param gameModel gameModel object
 */
function makeMove(selectedCell: number, player: string, gameModel: GameModel){
    if (isMoveLegal(selectedCell, gameModel)) {
        gameModel.board[selectedCell].taken = true;
        gameModel.board[selectedCell].taken_by = player;
    }
}