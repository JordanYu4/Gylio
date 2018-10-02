export const fetchList = (boardId, listId) => (
  $.ajax({
    method: 'GET',
    url: `api/boards/${boardId}/lists/${listId}`,
    error: err => console.log(err)
  })
);

export const fetchLists = () => (
  $.ajax({
    method: 'GET',
    url: 'api/lists',
    error: err => console.log(err) // refactor this error handling
  })
);

export const createList = list => (
  $.ajax({
    method: 'POST',
    url: `api/boards/${list.board_id}/lists`,
    data: { list }
  })
);

export const updateList = list => (
  $.ajax({
    method: 'PATCH',
    url: `api/boards/${list.board_id}/lists/${list.id}`,
    data: { list }
  })
);

export const deleteList = listId => (
  $.ajax({
    method: 'DELETE',
    url: `api/lists/${listId}`
  })
);
