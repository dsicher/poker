import React from 'react';
import { connect } from 'react-redux';

import { GAME_PHASE } from '../js/constants';

/**
 * Poker game score component
 * @param {object} props - State and dispatch functions mapped from the redux store
 * @return {object} The scorekeeping component
 */
const Score = props => {
  if (!props.isDealPhase) {
    return null;
  } else {
    return <div className="poker-score">SCORE: {props.score}</div>;
  }
};

const mapStateToProps = state => ({
  score: state.score,
  isDealPhase: state.game_phase === GAME_PHASE.DEAL,
});

const ConnectedScore = connect(mapStateToProps)(Score);

export default ConnectedScore;
