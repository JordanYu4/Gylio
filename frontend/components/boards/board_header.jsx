import React from 'react';

class BoardHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const board = this.props.board;

    return(
      <div className="board-show-header">
        <h1>{board.title}</h1>
      </div>
    );
  }
}

export default BoardHeader;
