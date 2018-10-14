export const getAllBoards = ({ boards }) => {
  return (
    Object.keys(boards).map(key => boards[key])
  );
}; // refactor with getAllBoardsForUser

export const selectBoard = ({ boards }, boardId) => {
  return boards[boardId] || {};
};

export const selectListsForBoard = ({lists}, board) => {
  let listCollection = {};
  board.list_order.map(listId => listCollection[listId] = lists[listId]);
  return listCollection;
};

export const selectList = ({ lists }, listId) => {
  return lists[listId] || {};
}

export const selectCardsForList = ({cards}, list) => {
  let cardCollection = {};
  list.card_order.map(cardId => cardCollection[cardId] = cards[cardId]);
  return cardCollection;
}

export const selectCard = ({ cards }, cardId) => {
  return cards[cardId] || {};
}