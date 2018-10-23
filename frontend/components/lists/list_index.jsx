import React from 'react';
import isEqual from 'lodash/isEqual';

import ListIndexItemContainer from './list_index_item_container';
import ListFormContainer from './list_form_container';

class ListIndex extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      listOrder: []
    };
  }

  componentWillMount() {
    this.boardId = this.props.boardId; 
    if (!this.props.board) this.props.fetchBoard(this.boardId); 
    this.props.fetchListsForBoard(this.boardId);
  }

  // componentDidUpdate() {
  //   if (this.props.board.list_order) {

  //   } 
  // }
  
  render() {
    if (typeof this.props.board.list_order === "undefined" || 
        typeof this.props.lists === "undefined") {
      return null;
    }
    const { lists, board: {list_order} } = this.props;
    let indexedLists = jQuery.isEmptyObject(lists) ? null : 
      list_order.map(listId => (
        <ListIndexItemContainer
          key={listId}
          listId={listId}
          list={lists[listId]}
        /> 
      )
    );

    return (
      <div className="list-index-container">
        <ul className="list-index">
          { indexedLists }
          <li className="list-form-container">
            <span className="list-form-toggle-button js-list-form-open">
              + Add another list
            </span>
            <ListFormContainer />
          </li>
        </ul>
      </div>
    )
  }
};

export default ListIndex;