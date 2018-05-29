import { actionTypes } from './actions';
import { CARD_STATE, GAME_PHASE, HAND_SIZE, POINTS } from '../js/constants';

const initialState = {
  deck: [],
  hand: [],
  game_phase: GAME_PHASE.DEAL,
  score: POINTS.NOTHING,
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case actionTypes.DEAL:
      return {
        ...state,
        deck: action.deck,
        hand: action.hand,
        game_phase: GAME_PHASE.DRAW,
      };
    case actionTypes.DRAW:
      return {
        ...state,
        deck: action.deck,
        hand: action.hand,
        game_phase: GAME_PHASE.DEAL,
        score: action.score,
      };
    case actionTypes.SELECT_CARD:
      return {
        ...state,
        hand: action.hand,
      };
    default:
      return state;
  }
}
