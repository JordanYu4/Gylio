import React from 'react';
import { Link } from 'react-router-dom';

import BoardIndexItem from './board_index_item';

class BoardIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBoards();
  }

  render() {
    const boards = this.props.boards;
    const boardKeys = Object.keys(boards);
    const indexedBoards = boardKeys.map(boardKey => (
      <BoardIndexItem
        board={boards[boardKey]}
        key={boardKey}
      />
      )
    );

    return(
      <div>
        <h1>Personal Boards</h1>
        <ul>
          {indexedBoards}
          <Link to="">Create new board...</Link>
        </ul>
      </div>
    );
  }


};

export default BoardIndex;
