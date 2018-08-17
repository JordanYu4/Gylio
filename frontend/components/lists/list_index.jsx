import React from 'react';

import ListForm from './list_form.jsx';

class ListIndex extends React.Component {
  constructor(props) {
    super(props);
    this.listIds = props.listIds;
    this.fetchList = props.fetchList;
  }

  componentDidMount() {
    // this.props.fetchList
    console.log(this.props.listIds);
    this.props.listIds.map(listId => this.props.fetchList(listId));
  }

  // const indexedLists = lists.map(list => {
  //   return (
  //     <div></div>
  //   );
  // });

  render() {
    const { boardId, createList } = this.props;
    if (!boardId) return null;
    // {indexedLists}
    return(
      <ul className="list-index">

        <ListForm boardId={boardId} createList={createList} />
      </ul>
    );
  }
};

export default ListIndex;
