import React from 'react';

import ListForm from './list_form';

class ListIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchList
    // this.props.listIds.map(listId => this.props.fetchList(listId));
  }

  // const indexedLists = lists.map(list => {
  //   return (
  //     <div></div>
  //   );
  // });

  render() {
    const { board, createList } = this.props;
    if (!board) return null;
    // {indexedLists}
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