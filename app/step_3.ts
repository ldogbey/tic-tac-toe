import { GameModel } from "./step_1";
/**
 * This returns an array of all legal moves available
 * @param gameModel gameModel object
 * @returns array of indices of legal moves available
 */
export function allLegalMovesAvailable(gameModel: GameModel) {
    const legalMoves = [];
    for (let i = 0; i < 9; i++) {
        if (!gameModel.board[i].taken){
            legalMoves.push(i);
        }
    }
    return legalMoves;
}