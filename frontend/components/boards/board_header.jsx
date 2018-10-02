import React from 'react';

class BoardHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBoard(this.props.boardId);
  }

  render() {
    const board = this.props.board;
    if (!board) return null;
    
    return(
      <div className="board-show-header">
        <h1>{board.title}</h1>
      </div>
    );
  }
}

export default BoardHeader;
