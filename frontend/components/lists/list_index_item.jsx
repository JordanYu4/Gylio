import React from 'react';

const ListIndexItem = ({ list }) => {
  return(
    <li className="list-index-item">
      {list.title}
      <ul className="card-index">

      </ul>
    </li>
  );
};

export default ListIndexItem;