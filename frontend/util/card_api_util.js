// export const fetchCard = (boardId, listId, cardId) => (
//   $.ajax({
//     method: 'GET',
//     url: `api/boards/${boardId}/lists/${listId}/cards/${cardId}`,
//     error: err => console.log(err)
//   })
// );

export const fetchCardsForList = (listId) => (
  $.ajax({
    method: 'GET',
    url: `api/lists/${listId}/cards`,
    error: err => console.log(err)
  })
);

export const createCard = (card) => (
  $.ajax({
    method: 'POST',
    url: `api/lists/${card.list_id}/cards`,
    data: { card }
  })
);

export const updateCard = (card) => (
  $.ajax({
    method: 'PATCH',
    url: `api/cards/${card.id}`,
    data: { card }
  })
);

export const deleteCard = cardId => (
  $.ajax({
    method: 'DELETE',
    url: `api/cards/${cardId}`
  })
);
