import * as CardAPIUtil from '../util/card_api_util';

export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const RECEIVE_CARD = 'RECEIVE_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';
export const RECEIVE_CARD_ERRORS = 'RECEIVE_CARD_ERRORS';

// export const fetchCards = () => dispatch => (
//   CardAPIUtil.fetchCards().then(cards =>
//     dispatch(receiveCards(cards))
//   )
// );

export const fetchCardsForList = (boardId, listId) => dispatch => (
  ListAPIUtil.fetchCardsForList(boardId, listId).then(cards => (
    dispatch(receiveCards(cards))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const createCard = (boardId, card) => dispatch => (
  CardAPIUtil.createCard(boardId, card).then(payload => (
    dispatch(receiveCard(payload))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const editCard = (boardId, card) => dispatch => (
  CardAPIUtil.updateCard(boardId, card).then(payload => ( 
    dispatch(receiveCard(payload))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const deleteCard = cardId => dispatch => (
  ListAPIUtil.deleteCard(cardId).then(cardId => (
    dispatch(removeCard(cardId))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const receiveCards = cards => ({
  type: RECEIVE_CARDS,
  cards
});

export const receiveCard = payload => ({
  type: RECEIVE_CARD,
  payload
});

export const removeCard = cardId => ({
  type: REMOVE_CARD, 
  cardId
})

export const receiveErrors = errors => ({
  type: RECEIVE_CARD_ERRORS,
  errors
});
