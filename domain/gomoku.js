//https://en.wikipedia.org/wiki/Go_(game)

require('dotenv').config();


const MINIMUM_WIN_LENGTH = 5;
const DEFAULT_COLS = 16;
const DEFAULT_ROWS = DEFAULT_COLS;

const COLS = process.env.COLS || DEFAULT_COLS;
const ROWS = process.env.ROWS || DEFAULT_ROWS;

const play = (board, row, col, player) => {
    board.squares[row][col] = player;
    return board;
    
};

const isWin = (board) => {
    for (let col = 1; col <= (board.cols); col++) {
        for (let row = 1; row <= (board.cols); row++) {
            const square = { col: col, row: row };
            // eslint-disable-next-line no-undef
            if (testRow(diagonal(square), board)) return true;
            // eslint-disable-next-line no-undef
            if (testRow(horizontal(square), board)) return true;
            // eslint-disable-next-line no-undef
            if (testRow(vertical(square), board)) return true;
        }
    }
    return false;
}
const isTie = (board) => {
    for (let col = 1; col <= (board.cols); col++){
        for (let row = 1; row <= (board.cols); row++){
            // eslint-disable-next-line no-whitespace-before-property, eqeqeq
            if (board.square [row][col] == 0) return false;
        }
    }
    return !isWin(board);
};

const createBoard = () => {
    const board = {
        minInRow: MINIMUM_WIN_LENGTH,
        cols: COLS,
        rows: ROWS,
        squares: []
    }
    for (let i = 0; i < COLS + 1; i++) {
        board.squares.push(Array(ROWS + 1));
    }
    return board;
}
module.exports  = { play, isWin,isTie, createBoard };