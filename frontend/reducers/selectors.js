export const selectBoard = ({ boards }, boardId) => {
  return boards[boardId] || {}; 
};

export const getAllBoards = ({ boards }) => (
  Object.keys(boards).map(key => boards[key])
);
