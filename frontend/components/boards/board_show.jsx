import React from 'react';

import BoardHeaderContainer from './board_header_container';
import ListIndexContainer from '../lists/list_index_container';
import CardDetailModal from '../cards/card_detail_modal';

const BoardShow = () => {
  return (
    <div className="board-show">
      <BoardHeaderContainer />
      <ListIndexContainer />
      <CardDetailModal />
    </div>
  );
};

export default BoardShow;
