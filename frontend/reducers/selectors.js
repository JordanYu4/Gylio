export const getAllBoards = ({ boards }) => {
  return (
    Object.keys(boards).map(key => boards[key])
  );
};

export const selectBoard = ({ boards }, boardId) => {
  return boards[boardId] || {};
};

export const selectListsForBoard = ({lists}, board) => {
  let listCollection = {};
  board.listIds.map(listId => listCollection[listId] = lists[listId]);
  return listCollection;
};

export const selectList = ({ lists }, listId) => {
  return lists[listId] || {};
}
