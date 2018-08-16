import merge from 'lodash/merge';

import {
  RECEIVE_CARDS,
  RECEIVE_CARD
} from '../actions/card_actions';

const CardsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CARDS:
      return action.cards;
    case RECEIVE_CARD:
      return merge({}, state, {[action.card.id]: action.card});
    default:
      return state;
  }
};

export default CardsReducer;
