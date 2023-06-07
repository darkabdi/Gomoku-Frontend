/**
 * @group unit
 */

//npm i @faker-js/faker
const { faker } = require('@faker-js/faker');// faker för att skapa testdata.
const gameHandler = require('../domain/game.js') //Object under test.

/**
 * Tester bestämda från tillståndsdiagram.
 */

describe('given a gameHandler', () => { 
    describe('when using', () => {
        it('should have expected properties', () => {
            expect(gameHandler).toHaveProperty('createGame');
            expect(gameHandler).toHaveProperty('addPlayer');
        })
    }) 
})

