import React from 'react';

import BoardHeader from './board_header';

class BoardShow extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchBoard(this.props.boardId);
  }

  render() {
    const board = this.props.board;
    if (!board) return null;

    return (
      <div>
        <BoardHeader board={board}/>
      </div>
    );
  }
};

export default BoardShow;
