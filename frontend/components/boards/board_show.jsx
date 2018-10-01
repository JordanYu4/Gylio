import React from 'react';

import BoardHeaderContainer from './board_header_container';
import ListIndexContainer from '../lists/list_index_container';

const BoardShow = () => {
  return (
    <div className="board-show">
      <BoardHeaderContainer />
      <ListIndexContainer />
    </div>
  );
};

export default BoardShow;
