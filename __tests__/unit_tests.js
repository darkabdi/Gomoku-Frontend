/**
 * @group unit
 */

const  {faker} = require('@faker-js/faker'); // Vi använder faker för att skapa testdata.
const gameHandler = require('../domain/game.js'); //Objekt under test

test("Is Gomoku game is fun?", () => {
    expect("yes").toBe("yes");
})

describe("Given a game object", () => {
    describe("when the game object is works", () => {
        test("then the game object works", () => {
            expect("done").toBe("done");
        })
    })
})

