
export const createBoard = board => {
  $.ajax({
    method: 'POST',
    url: 'api/boards',
    data: { board }
  })
};

export const editBoard = board => {
  $.ajax({
    method: 'PATCH',
    url: `api/boards/${board.id}`,
    data: { board }
  })
}

export const fetchBoards = data => {
  $.ajax({
    method: 'GET',
    url: 'api/boards',
    data,
    error: err => console.log(err)
  })
};

export const deleteBoard = boardId => {
  $.ajax({
    method: 'DELETE',
    url: `api/boards/${id}`
  })
}
