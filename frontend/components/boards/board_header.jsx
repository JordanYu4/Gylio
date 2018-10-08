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
        <section className="board-info">
          <h1>{board.title}</h1>
          <span>|</span>
          <h2>Personal</h2>
          <span>|</span>
          <h2>Private</h2>
        </section>
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
