export const fetchCards = () => (
  $.ajax({
    method: 'GET',
    url: 'api/cards',
    error: err => console.log(err)
  })
);

export const createCard = card => (
  $.ajax({
    method: 'POST',
    url: 'api/cards',
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
