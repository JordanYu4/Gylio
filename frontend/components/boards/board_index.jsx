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
      <div className="board-index-container">
        <div className="board-index-section">
          <div className="board-index-section-header">
            <h1>Personal Boards</h1>
          </div>
          <ul className="board-index-list">
            {indexedBoards}
            <Link to="" className="board-index-item">Create new board...</Link>
          </ul>
        </div>
      </div>
    );
  }


};

export default BoardIndex;
