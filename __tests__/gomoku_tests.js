/**
 * @group unit
 */

const gomokuHandler = require('../domain/gomoku.js');
// const ERR_MSGS = require('../util/error_messages.js');
// const testUtil = require('../util/test_util.js');

/**
 * Tests determined from sequence diagram.
 */
  describe('given a gomokuHandler', () => {
    describe('when created', () => {
      it('then should have expected properties', () => {
        expect(gomokuHandler).toHaveProperty('play');
        expect(gomokuHandler).toHaveProperty('isWin');
        expect(gomokuHandler).toHaveProperty('isTie');
        expect(gomokuHandler).toHaveProperty('createBoard');
      });
    });
  });

