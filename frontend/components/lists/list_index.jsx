import React from 'react';

import ListIndexItem from './list_index_item';
import ListFormContainer from './list_form_container';

class ListIndex extends React.Component {
  constructor(props) {
    super(props); 
  }

  componentWillMount() {
    this.boardId = this.props.boardId;
    this.props.fetchBoard(this.boardId); 
    this.props.fetchListsForBoard(this.boardId);
  }
  
  render() {
    if (typeof this.props.board.list_order === "undefined" || 
        typeof this.props.lists === "undefined") {
      return null;
    }
    const { board, 
            editBoard,
            createList, 
            lists } = this.props;
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
        <ListFormContainer />
      </ul>
    );
  }
};

export default ListIndex;