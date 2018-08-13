export const fetchBoard = boardId => (
  $.ajax({
    method: 'GET',
    url: `api/boards/${boardId}`,
    error: err => console.log(err)
  })
);

export const fetchBoards = () => (
  $.ajax({
    method: 'GET',
    url: 'api/boards',
    error: err => console.log(err)
  })
);

export const createBoard = board => (
  $.ajax({
    method: 'POST',
    url: 'api/boards',
    data: { board }
  })
);

export const updateBoard = board => (
  $.ajax({
    method: 'PATCH',
    url: `api/boards/${board.id}`,
    data: { board }
  })
);

export const deleteBoard = boardId => (
  $.ajax({
    method: 'DELETE',
    url: `api/boards/${boardId}`
  })
);
