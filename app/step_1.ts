declare const $;
export class GameModel {
    board = [
        {taken: false, taken_by: ''},
        {taken: false, taken_by: ''},
        {taken: false, taken_by: ''},
        {taken: false, taken_by: ''},
        {taken: false, taken_by: ''},
        {taken: false, taken_by: ''},
        {taken: false, taken_by: ''},
        {taken: false, taken_by: ''},
        {taken: false, taken_by: ''}
    ];
    playerOne = 'O';
    playerTwo = 'X';
    wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    cells = [$('.cell')]; 
}