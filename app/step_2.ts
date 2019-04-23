import { GameModel } from "./step_1";
/**
 * Validate whether the cell selected is a legal move or not.
 * @param seletedCell selected cell
 * @param gameModel GameModel object
 * @returns true/false
 */
export function isMoveLegal(seletedCell: number, gameModel: GameModel) {
    return gameModel.board[seletedCell].taken;
}