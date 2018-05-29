import { SUITS, VALUES } from './constants.js';
import { shuffleArray } from './utils.js';

/**
 * Creates a new array of 52 cards, shuffles it, and returns it
 * @return {array} The shuffled array of cards
 */
export default function newDeck() {
  const cards = [];
  SUITS.forEach(suit =>
    VALUES.forEach(value => cards.push({ value, suit, isSelected: false }))
  );
  return shuffleArray(cards);
}
