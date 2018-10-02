import React from 'react';

import ListIndexItem from './list_index_item';
import ListForm from './list_form';

class ListIndex extends React.Component {
  constructor(props) {
    super(props); 
  }

  componentWillMount() {
    this.boardId = this.props.boardId;
    this.props.fetchBoard(this.boardId); 
    this.props.fetchListsForBoard(this.boardId);
  }
  
  // componentDidMount() {
  //   this.board = this.props.board;
  // }
  
  render() {
    if (typeof this.props.board.list_order === "undefined") {// || typeof this.props.lists === "undefined") {
      return null;
    }
    const { board, 
            createList, 
            lists } = this.props;
    console.log('board.list_order', board.list_order);
    console.log('lists', lists);
    const indexedLists = lists.map(list => (
      <ListIndexItem
        list={list}
        key={list.id}
      /> 
    ));

    return(
      <ul className="list-index">
        {indexedLists}
        <li className="form-toggle-button js-form-open">
          <span className="create-new-list">+ Add another list</span>
        </li>
        <ListForm board={board} createList={createList} />
      </ul>
    );
  }
};

export default ListIndex;