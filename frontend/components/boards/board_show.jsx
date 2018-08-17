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
    const boardListIds = board.listIds;
    const { editBoard, editList, deleteBoard, deleteList } = this.props;

    return (
      <div>
        <BoardHeader board={board} />
        <ListIndex lists={boardListIds} />
      </div>
    );
  }
};

export default BoardShow;
