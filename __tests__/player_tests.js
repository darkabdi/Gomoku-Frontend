/**
 * @group unit
 */

// eslint-disable-next-line no-unused-vars
const { faker } = require('@faker-js/faker'); // Vi använder faker för att skapa testdata.
const playerHandler = require('../domain/player.js'); // Objekt under test

/**
 * Tests determined from sequence diagram.
 */
describe('Given a playerHandler,', () => {
    describe('When using a playHandler', () => {
    it('Then should have expected properties', () => {
        expect(playerHandler).toHaveProperty('create');
        expect(playerHandler).toHaveProperty('findById');
    });
    });
})

/**
/**
 * Test determined from Mockup.
 */
describe.skip('Given a playerHandler', () => {
    describe('when creating player without name and id', () => {
        const player = playerHandler.create();
        it('Then should have expected properties', () => {
            expect(player).toHaveProperty('id');
            expect(player).toHaveProperty('name');
            expect(player.id).not.toBeUndefined();
            expect(player.name).not.toBeUndefined();
        });
    });
});