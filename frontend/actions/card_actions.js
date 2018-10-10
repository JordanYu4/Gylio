import * as CardAPIUtil from '../util/card_api_util';

export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const RECEIVE_CARD = 'RECEIVE_CARD';
export const RECEIVE_CARD_ERRORS = 'RECEIVE_CARD_ERRORS';

// export const fetchCards = () => dispatch => (
//   CardAPIUtil.fetchCards().then(cards =>
//     dispatch(receiveCards(cards))
//   )
// );

export const fetchCardsForList = listId => dispatch => (
  ListAPIUtil.fetchCardsForList(listId).then(cards => (
    dispatch(receiveCards(cards))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const createCard = card => dispatch => (
  CardAPIUtil.createCard(card).then(payload => (
    dispatch(receiveCard(payload))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const editCard = card => dispatch => (
  CardAPIUtil.updateCard(card).then(payload => 
    dispatch(receiveCard(payload))
  )
);

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
