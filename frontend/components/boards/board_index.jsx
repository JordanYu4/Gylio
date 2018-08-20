import React from 'react';
import { Link } from 'react-router-dom';

import BoardIndexItem from './board_index_item';
import BoardFormModal from './board_form_modal';

class BoardIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBoards();
    console.log("Fetched boards");
  }

  render() {
    const boards = this.props.boards;
    const indexedBoards = boards.map(board => (
      <BoardIndexItem
        board={board}
        key={board.id}
      />
      )
    );

    return(
      <div className="board-index-container">
        <div className="board-index-section">
          <div className="board-index-section-header">
            <i className="icon-personal"></i>
            <h1>Personal Boards</h1>
          </div>
          <ul className="board-index-list">
            {indexedBoards}
            <li className="form-toggle-button js-modal-open">
              <span className="create-new-board">Create new board...</span>
            </li>
          </ul>
        </div>
        <BoardFormModal />
      </div>
    );
  }


};

export default BoardIndex;
