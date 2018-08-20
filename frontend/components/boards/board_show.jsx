import React from 'react';

import BoardHeader from './board_header';
import ListIndex from '../lists/list_index.jsx';

class BoardShow extends React.Component {
  componentDidMount() {
    this.props.fetchBoards();
  }

  render() {
    const board = this.props.board;
    if (!board) return null;
    const boardListIds = board.listIds;
    const {
      editBoard,
      deleteBoard,
      fetchList,
      createList,
      editList,
      deleteList
    } = this.props;
    console.log(`props:`);
    console.log(this.props);
    console.log('board:');
    console.log(board);
    console.log(`board.listIds:`);
    console.log(board.listIds);

    return (
      <div>
        <BoardHeader board={board} />
        <ListIndex
          boardId={board.id}
          listIds={boardListIds}
          fetchList={fetchList}
          createList={createList}
          editList={editList}
          deleteList={deleteList}
          />
      </div>

    );
  }
};

export default BoardShow;
