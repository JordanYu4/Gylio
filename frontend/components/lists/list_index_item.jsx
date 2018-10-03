import React from 'react';

const ListIndexItem = ({ list }) => {
  return(
    <li className="list-index-item">
      {list.title}
    </li>
  );
};

export default ListIndexItem;