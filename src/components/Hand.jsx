import React from 'react';
import { connect } from 'react-redux';
import actions from '../redux/actions';

import Card from './Card';

import { GAME_PHASE } from '../js/constants';

/**
 * Poker game hand component, representing all cards in play
 * @param {object} props - State and dispatch functions mapped from the redux store
 * @return {object} The hand component
 */
const Hand = props => {
  const { hand, isDrawPhase, selectCard } = props;

  /**
   * Curries the selectCard redux action into a new function without params
   * @param {number} i - the index in the current hand of the card to select
   * @return {function} The curried selectCard action
   */
  const currySelectCard = i => () => {
    if (isDrawPhase) {
      selectCard(hand, i);
    }
  };

  return (
    <div className="poker-hand">
      {hand.map((card, i) => (
        <Card
          {...card}
          key={`${i}${card.value}${card.suit}`}
          isDrawPhase={isDrawPhase}
          selectCard={currySelectCard(i)}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  hand: state.hand,
  isDrawPhase: state.game_phase === GAME_PHASE.DRAW,
});

const mapDispatchToProps = dispatch => ({
  selectCard: (hand, i) => dispatch(actions.selectCard(hand, i)),
});

const ConnectedHand = connect(
  mapStateToProps,
  mapDispatchToProps
)(Hand);

export default ConnectedHand;
