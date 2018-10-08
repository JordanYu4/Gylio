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
    const { lists, board: {list_order} } = this.props;
    let indexedLists = jQuery.isEmptyObject(lists) ? null : list_order.map(list_id => (
      <ListIndexItem
        list={lists[list_id]}
        key={list_id}
      /> 
    ));

    return <div className="list-index-container">
        <ul className="list-index">
          {indexedLists}
          <li className="list-form-container">
            <span className="form-toggle-button js-form-open">
              + Add another list
            </span>
            <ListFormContainer />
          </li>
        </ul>
      </div>;
  }
};

export default ListIndex;