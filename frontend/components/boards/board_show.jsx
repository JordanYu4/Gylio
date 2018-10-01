import React from 'react';

import BoardHeader from './board_header';
import ListIndex from '../lists/list_index';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('boardId', this.props.boardId);
    console.log('board', this.props.board);
    // console.log('lists', this.props.lists);
    this.props.fetchBoard(this.props.boardId);
  }

//   board, 
//   boardId, 
//   lists,
//   fetchBoard, 
//   createList, 
//   editList, 
//   deleteList
// }) => {
//   const boards = {
//     [boardId]: board
//   };

  render() {
    const board = this.props.board;
    if (!board) return null;
    const { 
      createList, 
      editList, 
      deleteList
    } = this.props;

    return (
      <div className="board-show">
        <BoardHeader board={board} />
        <ListIndex
          board={board}
          // lists={lists}
          createList={createList}
          editList={editList}
          deleteList={deleteList}
          />
      </div>
    );
  }
};

export default BoardShow;
