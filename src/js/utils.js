/**
 * Shuffles an array and returns it
 * @param {array} arr - the array to shuffle
 * @return {array} The shuffled array
 */
export const shuffleArray = function(arr) {
  let index = arr.length;
  while (--index) {
    let randomIndex = Math.floor(Math.random() * (index + 1));
    let temp = arr[index];
    arr[index] = arr[randomIndex];
    arr[randomIndex] = temp;
  }
  return arr;
};

/**
 * Returns the unicode character of the param suit, if there is one
 * @param {string} suit - The suit to convert to unicode
 * @return {string} The relevant unicode string
 */
export const getDisplaySuit = suit => {
  let displaySuit = '';
  if (suit === 'clubs') {
    displaySuit = '\u2663';
  } else if (suit === 'diamonds') {
    displaySuit = '\u2666';
  } else if (suit === 'hearts') {
    displaySuit = '\u2665';
  } else if (suit === 'spades') {
    displaySuit = '\u2660';
  }
  return displaySuit;
};

/**
 * Returns the decorative character of the param card value, ie 'K' instead of 13
 * @param {number} value - The value to convert
 * @return {string|number} The converted decorative value
 */
export const getDisplayValue = value => {
  let displayValue = value;
  if (displayValue === 1) {
    displayValue = 'A';
  } else if (displayValue === 11) {
    displayValue = 'J';
  } else if (displayValue === 12) {
    displayValue = 'Q';
  } else if (displayValue === 13) {
    displayValue = 'K';
  }
  return displayValue;
};

/**
 * Determines whether a hand contains a straight
 * @param {array} hand - The array of card objects to test
 * @return {boolean} True if the array contains a straight
 */
export const isStraight = hand => {
  const values = hand.map(card => card.value);
  values.sort((a, b) => a - b);
  for (let i = 1; i < values.length; i++) {
    if (values[i] - values[i - 1] !== 1) {
      return false;
    }
  }
  return true;
};

/**
 * Determines whether a hand contains a pair
 * @param {array} hand - The array of card objects to test
 * @return {boolean} True if the array contains a pair
 */
export const isPair = hand => {
  const values = hand.map(card => card.value);
  values.sort();
  for (let i = 1; i < values.length; i++) {
    if (values[i] === values[i - 1]) {
      return true;
    }
  }
  return false;
};
