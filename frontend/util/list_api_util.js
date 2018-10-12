export const fetchListsForBoard = boardId => (
  $.ajax({
    method: 'GET', 
    url: `api/boards/${boardId}/lists`,
    error: err => console.log(err)
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
    url: `api/lists/${list.id}`,
    data: { list }
  })
);

export const deleteList = listId => (
  $.ajax({
    method: 'DELETE',
    url: `api/lists/${listId}`
  })
);
