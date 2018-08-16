import React from 'react';

import BoardHeader from './board_header';
// import ListIndex from '../lists/list_index.jsx';

class BoardShow extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchBoard(this.props.boardId);
  }

  render() {
    const board = this.props.board;
    const boardLists = this.props.boardLists;
    if (!board) return null;
    
    // <ListIndex boardLists={boardLists} />
    return (
      <div>
        <BoardHeader board={board} />

      </div>
    );
  }
};

export default BoardShow;
