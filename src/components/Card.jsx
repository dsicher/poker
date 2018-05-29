import React from 'react';
import { getDisplaySuit, getDisplayValue } from '../js/utils';

/**
 * Poker game card component, used to represent a single card in play
 * @param {object} props - inherited from ./Hand
 * @return {object} The card component
 */
const Card = props => {
  const { value, suit, isDrawPhase, isSelected, selectCard } = props;
  const displayValue = getDisplayValue(value);
  const displaySuit = getDisplaySuit(suit);
  let cardClass = 'card';
  cardClass += isSelected ? ' selected' : '';
  cardClass += isDrawPhase ? ' draw' : '';

  return (
    <div className={cardClass} onClick={selectCard}>
      <div className={`mark top ${suit}`}>{displayValue}</div>
      <div className={`mark middle ${suit}`}>{displaySuit}</div>
      <div className={`mark bottom ${suit}`}>{displayValue}</div>
    </div>
  );
};

export default Card;
