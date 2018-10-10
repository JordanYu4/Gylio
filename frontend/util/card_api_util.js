export const fetchCard = (boardId, listId, cardId) => (
  $.ajax({
    method: 'GET',
    url: `api/boards/${boardId}/lists/${listId}/cards/${cardId}`,
    error: err => console.log(err)
  })
);

export const fetchCardsforList = (boardId, listId) => (
  $.ajax({
    method: 'GET',
    url: `api/boards/${boardId}/lists/${listId}/cards`,
    error: err => console.log(err)
  })
);

export const createCard = (boardId, listId, card) => (
  $.ajax({
    method: 'POST',
    url: `api/boards/${boardId}/lists/${listId}/cards`,
    data: { card }
  })
);

export const updateCard = card => (
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
