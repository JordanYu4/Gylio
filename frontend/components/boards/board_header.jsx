import React from 'react';
import { withRouter } from 'react-router-dom';

class BoardHeader extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoard(this.props.boardId);
  }

  handleDelete() {
    this.props.deleteBoard(this.props.boardId)
    .then(this.navigateToIndex());
  }

  navigateToIndex() {
    this.props.history.push('/boards');
  }

  render() {
    const board = this.props.board;
    if (!board) return null;
    
    return(
      <div className="board-show-header">
        <h1>{board.title}</h1>
        <form onClick={this.handleDelete} className="board-delete-form">
          <input type="button"
            value="Delete board"
            className="board-delete-button"
          />
        </form>
      </div>
    );
  }
}

export default withRouter(BoardHeader);
