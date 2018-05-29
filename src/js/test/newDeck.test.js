import newDeck from '../newDeck';
import assert from 'assert';

describe('newDeck', function() {
  describe('newDeck should generate a deck of cards', function() {
    it('should return an array of 52 items', function() {
      assert.equal(newDeck().length, 52);
    });
  });
});
