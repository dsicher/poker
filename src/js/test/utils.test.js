import {
  shuffleArray,
  getDisplaySuit,
  getDisplayValue,
  isStraight,
  isPair,
} from '../utils.js';
import assert from 'assert';

/* Testing shuffleArray */
const shuffleTestArray = [2, 4, 6, 8, 10, 8, 6, 4, 2];

describe('shuffleArray', function() {
  describe('A sorted array and a shuffled then sorted array should be equal', function() {
    it('should return an array with the same values and the param array', function() {
      assert.equal(
        shuffleArray(shuffleTestArray).sort(),
        shuffleTestArray.sort()
      );
    });
  });
});

/* Testing getDisplaySuit */
describe('getDisplaySuit', function() {
  describe('A known suit should return its unicode equivalent, an unnkown suit should return an empty string', function() {
    it('should return unicode for clubs', function() {
      assert.equal(getDisplaySuit('clubs'), '\u2663');
    });
    it('should return an empty string', function() {
      assert.equal(getDisplaySuit('bananas'), '');
    });
  });
});

/* Testing getDisplayValue */
describe('getDisplayValue', function() {
  describe('A face card value (1, 11, 12, 13) should return its face value, else no change', function() {
    it('should return A for an ace card', function() {
      assert.equal(getDisplayValue(1), 'A');
    });
    it('should return 2 for a 2 card', function() {
      assert.equal(getDisplayValue(2), 2);
    });
  });
});

/* Testing isStraight and isPair */
const scoreTests = [
  {
    testing: 'a low ordered straight',
    hand: [
      { value: 2 },
      { value: 3 },
      { value: 4 },
      { value: 5 },
      { value: 6 },
    ],
    stringResult: true,
    pairResult: false,
  },
  {
    testing: 'a high ordered straight',
    hand: [
      { value: 9 },
      { value: 10 },
      { value: 11 },
      { value: 12 },
      { value: 13 },
    ],
    stringResult: true,
    pairResult: false,
  },
  {
    testing: 'an unordered straight',
    hand: [
      { value: 5 },
      { value: 3 },
      { value: 1 },
      { value: 4 },
      { value: 2 },
    ],
    stringResult: true,
    pairResult: false,
  },
  {
    testing: 'a pair',
    hand: [
      { value: 2 },
      { value: 2 },
      { value: 8 },
      { value: 4 },
      { value: 5 },
    ],
    stringResult: false,
    pairResult: true,
  },
  {
    testing: 'not a straight or pair',
    hand: [
      { value: 1 },
      { value: 2 },
      { value: 8 },
      { value: 4 },
      { value: 5 },
    ],
    stringResult: false,
    pairResult: false,
  },
];

scoreTests.forEach((test_case, i) => {
  describe(`Score Test ${i}: param is ${test_case.testing}`, function() {
    describe('Determine whether param is a straight', function() {
      it(`should return ${test_case.stringResult}`, function() {
        assert.equal(isStraight(test_case.hand), test_case.stringResult);
      });
    });
    describe('Determine whether param is a pair', function() {
      it(`should return ${test_case.pairResult}`, function() {
        assert.equal(isPair(test_case.hand), test_case.pairResult);
      });
    });
  });
});
