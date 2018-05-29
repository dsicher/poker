import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../redux/actions';

import { GAME_PHASE } from '../js/constants';

/**
 * Poker game button component, used to change the game phase
 * @param {object} props - State and dispatch functions mapped from the redux store
 * @return {object} The button component
 */
const Button = props => {
  const { deal, draw, deck, hand, game_phase } = props;
  const buttonClick = () => {
    switch (game_phase) {
      case GAME_PHASE.DEAL:
        return deal();
      case GAME_PHASE.DRAW:
        return draw(deck, hand);
      default:
        return;
    }
  };
  return (
    <div className={`poker-button ${game_phase}`} onClick={buttonClick}>
      { game_phase === GAME_PHASE.DEAL ? 'DEAL' : 'GO' }
    </div>
  );
};

const mapStateToProps = state => ({
  deck: state.deck,
  hand: state.hand,
  game_phase: state.game_phase,
});

const mapDispatchToProps = dispatch => ({
  draw: (deck, hand) => dispatch(actions.draw(deck, hand)),
  deal: () => dispatch(actions.deal()),
});

const ConnectedButton = connect(mapStateToProps, mapDispatchToProps)(Button);

export default ConnectedButton;
