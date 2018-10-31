import React from 'react';
import isEqual from 'lodash/isEqual';
import { removeId } from "../../util/shared_util";

import ListIndexItemContainer from './list_index_item_container';
import ListFormContainer from './list_form_container';

class ListIndex extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      listOrder: []
    };
    this.removeList = this.removeList.bind(this);
  }

  componentWillMount() {
    this.boardId = this.props.boardId; 
    if (!this.props.board) this.props.fetchBoard(this.boardId); 
    this.props.fetchListsForBoard(this.boardId);
  }

  componentDidUpdate() {
    const currentState = {
      listOrder: this.props.board.list_order
    };
    if (!isEqual(currentState, this.state)) {
      this.setState(currentState);
    }
  }

  async removeList(listId) {
    let newListOrder = await removeId(
      this.state.listOrder.slice(), listId
    );
    this.setState({
      listOrder: newListOrder
    });
  }
  
  render() {
    if (typeof this.state.listOrder === "undefined" || 
        typeof this.props.lists === "undefined") {
      return null;
    }
    const { lists } = this.props;
    const listOrder = this.state.listOrder;
    let indexedLists = jQuery.isEmptyObject(lists) ? null : 
      listOrder.map(listId => (
        <ListIndexItemContainer
          key={listId}
          listId={listId}
          list={lists[listId]}
          passCardId={this.props.passCardId}
          removeList={this.removeList}
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