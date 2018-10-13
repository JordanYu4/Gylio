import React from 'react';

const CardIndexItem = (props) => {
  if (!props.card) return null;

  return(
    <li className="card-index-item">
      {props.card.title}
    </li>
  );
}

export default CardIndexItem;