import React from 'react';

import BoardHeader from './board_header';
import ListIndex from '../lists/list_index.jsx';

class BoardShow extends React.Component {
  componentDidMount() {
    this.props.fetchBoard(this.props.boardId);
  }

  render() {
    const board = this.props.board;
    if (!board) return null;
    const boardLists = board.lists;
    const { editBoard, editList, deleteBoard, deleteList } = this.props;

    return (
      <div>
        <BoardHeader board={board} />
        <ListIndex lists={boardLists} />
      </div>
    );
  }
};

export default BoardShow;
