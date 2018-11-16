import React from 'react';
import BoardIndexItem from './board_index_item';

const BoardTemplateList = () => {
  const boards = [];
  /* Clicking on a board template index item 
     (similar to a BoardIndexItem) should create
     a new personal board with pre-made background, 
     lists, and some cards */ 
  const indexedTemplates = boards.map(board => (
    <BoardIndexItem
      board={board}
      key={board.id}
    />
  ));

  return (
    <ul className="board-index-list">
      { indexedTemplates }
    </ul>
  );
};

export default BoardTemplateList;