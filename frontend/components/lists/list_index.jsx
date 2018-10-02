import React from 'react';

import ListForm from './list_form';

class ListIndex extends React.Component {
  constructor(props) {
    super(props); 
  }

  componentDidMount() {
    this.props.fetchBoard(this.props.boardId); 
    // for (let i = 0; i < listIds.length; i++) {
      //   this.props.lists[i] = this.props.fetchList(this.board.listIds[i]); 
    // }
    this.board = this.props.board; 
    this.boardId = this.board.id;
    this.listIds = this.board.listIds;
    for (let i = 0; i < this.listIds.length; i++) {
      // debugger
      this.props.fetchList(this.boardId, this.listIds[i]);
      // console.log('boardId', this.boardId);
      // console.log('listId', this.listIds[i]);
    }
  }
    
  componentDidUpdate() {
    console.log("listIds", this.board.listIds)
    // this.board.listIds.map(listId => this.props.fetchList(this.boardId, listId));
    console.log("list index props", this.props);
    console.log('this.board', this.board);
  }

  
  render() {
    const { board, createList } = this.props;
    if (!board) return null;

    // {indexedLists}
    // const indexedLists = lists.map(list => {
    //   return (
    //     <div></div>
    //   );
    // });

    return(
      <ul className="list-index">

        <li className="form-toggle-button js-form-open">
          <span className="create-new-list">+ Add another list</span>
        </li>
        <ListForm board={board} createList={createList} />
      </ul>
    );
  }
};

export default ListIndex;