import React from 'react';
import { withRouter } from 'react-router-dom';

class BoardIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const boardId = this.props.board.id;
    this.props.history.push(`/boards/${boardId}`);
  }

  render() {
    const { title, backgroundColor } = this.props.board;
    return (
      <div
        className="board-index-item"
        onClick={this.handleClick}
      >
        <span className="index-item-title">
          {title}
        </span>
      </div>
    );
  }
}

export default withRouter(BoardIndexItem);
