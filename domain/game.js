//https://en.wikipedia.org/wiki/Go_(game)
//npm i uuid

const uuid = require('uuid');
const gomokuHandler = require('./gomoku.js');
const ERR_MSGS = require('../../util/error_messages.js');

let numGames = 0;
const COLS = 10;
const ROWS = 10;
const games = [];

const createGame = (name) => {
    if (!name) {
        name = "game_" + numGames++;
    }
    const board = gomokuHandler.createBoard();
    const game = {
        id: uuid.v4(),
        name: name,
        round: 0,
        player: 0,
        player1: null,
        player2: null,
        board: board,
    };
    games.push(game);
    return game;
}

const getGames = () => {
    return games;
};

const addPlayer = (id, player) => {
    if (!id) {
        throw ERR_MSGS.ERR_GAME_NOT_FOUND;
    }

}

const saveGame = (game) => {
    return game;
}

createGame("demo:1");
createGame("demo:2");


module.exports = {
    createGame,
    saveGame,
    getGames,
    addPlayer
}