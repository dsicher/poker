import React from 'react';

import Button from './Button';
import Hand from './Hand';
import Score from './Score';

/**
 * Poker game component
 * @return {object} The poker game
 */
const Poker = () => (
  <div className="Poker">
    <Score />
    <Hand />
    <Button />
  </div>
);

export default Poker;
