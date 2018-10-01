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
    console.log('lists', this.props.lists);
    this.props.fetchBoard(this.props.boardId);
  }

  componentDidUpdate() {
    console.log("boardId", this.props.boardId);
    console.log('board', this.props.board);
    console.log('lists', this.props.lists);
  }

  render() {
    const board = this.props.board;
    if (!board) return null;
    const { 
      editBoard,
      deleteBoard,
      createList, 
      editList, 
      deleteList, 
      lists
    } = this.props;

    return (
      <div className="board-show">
        <BoardHeader 
          board={board} 
          editBoard={editBoard} 
          deleteBoard={deleteBoard}
        />
        <ListIndex
          board={board}
          lists={lists}
          createList={createList}
          editList={editList}
          deleteList={deleteList}
        />
      </div>
    );
  }
};

export default BoardShow;
