import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BoardIndexItem from './board_index_item';
import BoardTemplateList from './board_template_list';
import BoardFormModal from './board_form_modal';

class BoardIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBoards();
  }

  render() {
    const boards = this.props.boards;
    const indexedBoards = boards.map(board => (
      <BoardIndexItem
        board={board}
        key={board.id}
      />
    ));

    return(
      <div className="board-index-container">
        <div className="board-index-section">
          <header className="board-index-section-header">
            <i className="icon-personal"></i>
            <h1>Personal Boards</h1>
          </header>
          <ul className="board-index-list">
            {indexedBoards}
            <li className="
              board-index-item-box 
              board-form-toggle-button 
              js-modal-open"
            >
              <span className="create-new-board">Create new board...</span>
            </li>
          </ul>
          {/* <header className="board-index-section-header">
            <FontAwesomeIcon icon="newspaper"
              className="icon"
            />
            <h1>Board Templates</h1>
          </header>
          <BoardTemplateList /> */}
        </div>
        <BoardFormModal />
      </div>
    );
  }
};

export default BoardIndex;
