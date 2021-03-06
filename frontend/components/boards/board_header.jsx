import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class BoardHeader extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteBoard = this.handleDeleteBoard.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoard(this.props.boardId);
  }

  handleDeleteBoard() {
    this.props.deleteBoard(this.props.boardId)
    .then(this.navigateToIndex());
  }

  navigateToIndex() {
    this.props.history.push('/boards');
  }

  render() {
    const board = this.props.board;
    if (!board) return null;
    
    return <div className="board-show-header">
        <section className="board-info">
          <h1>{board.title}</h1>
          <span className="divider">|</span>
          <h2>Personal</h2>
          <span className="divider">|</span>
          <h2>
            <span className="fa-icon-container">
              <FontAwesomeIcon icon="lock" 
                className="fa-icon-sm"
                transform="up-1"
              />
            </span>
            &nbsp;&nbsp;Private
          </h2>
          <span className="divider">|</span>
        </section>
        <form onClick={this.handleDeleteBoard} className="board-delete-form">
          <input type="button" value="Delete board" className="board-delete-button" />
        </form>
      </div>;
  }
}

export default withRouter(BoardHeader);
