import merge from 'lodash/merge';

import {
  RECEIVE_CARDS,
  RECEIVE_CARD
} from '../actions/card_actions';

const CardsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CARDS:
      return merge({}, state, action.cards);
    case RECEIVE_CARD:
      const newCard = { [action.payload.card.id]: action.payload.card };
      return merge({}, state, newCard);
    default:
      return state;
  }
};

export default CardsReducer;
