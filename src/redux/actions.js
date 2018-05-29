import { HAND_SIZE, POINTS } from '../js/constants';
import { isStraight, isPair } from '../js/utils';
import newDeck from '../js/newDeck';

export const actionTypes = {
  DEAL: 'POKER/DEAL',
  DRAW: 'POKER/DRAW',
  SELECT_CARD: 'POKER/SELECT_CARD',
};

/* Action Creators
 * Return actions with a type and any required payload for state updates
 */
export default {
  /* update state with a new deck and new hand */
  deal: () => {
    const updatedDeck = newDeck();
    const updatedHand = [];
    for (let i = HAND_SIZE; i > 0; i--) {
      updatedHand.push(updatedDeck.pop());
    }
    return {
      type: actionTypes.DEAL,
      deck: updatedDeck,
      hand: updatedHand,
    };
  },
  /* update state with a new cards for each selected card in the current hand,
   * updated deck, and an updated score
   */
  draw: (deck, hand) => {
    const updatedDeck = [].concat(deck);
    const updatedHand = [].concat(hand);
    let updatedScore = POINTS.NOTHING;
    updatedHand.forEach((card, i) => {
      if (card.isSelected) {
        updatedHand[i] = updatedDeck.pop();
      }
    });
    if (isStraight(updatedHand)) {
      updatedScore = POINTS.STRAIGHT;
    } else if (isPair(updatedHand)) {
      updatedScore = POINTS.PAIR;
    }
    return {
      type: actionTypes.DRAW,
      deck: updatedDeck,
      hand: updatedHand,
      score: updatedScore,
    };
  },
  /* update the hand with a new card selection */
  selectCard: (hand, i) => {
    const updatedHand = [].concat(hand);
    updatedHand[i].isSelected = !updatedHand[i].isSelected;
    return {
      type: actionTypes.SELECT_CARD,
      hand: updatedHand,
    };
  },
};
