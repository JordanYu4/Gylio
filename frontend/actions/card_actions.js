import * as CardAPIUtil from '../util/card_api_util';

export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const RECEIVE_CARD = 'RECEIVE_CARD';
export const RECEIVE_CARD_ERRORS = 'RECEIVE_CARD_ERRORS';

export const receiveCards = cards => ({
  type: RECEIVE_CARDS,
  cards
});

export const receiveCard = card => ({
  type: RECEIVE_CARD,
  card
});

export const receiveErrors = errors => ({
  type: RECEIVE_CARD_ERRORS,
  errors
});

export const createCard = card => dispatch => (
  CardAPIUtil.createCard(card).then(card =>
    dispatch(receiveCard(card))
  )
);

export const editCard = card => dispatch => (
  CardAPIUtil.updateCard(card).then(action => 
    dispatch(receiveCard(action.payload.card))
  )
);

export const fetchCards = () => dispatch => (
  CardAPIUtil.fetchCards().then(cards =>
    dispatch(receiveCards(cards))
  )
);
