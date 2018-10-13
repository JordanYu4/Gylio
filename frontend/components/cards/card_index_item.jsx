import React from 'react';

const CardIndexItem = (props) => {
  console.log(props.cardId);
  console.log(props.card);

  return(
    <li>
      {props.card.title}
    </li>
  );
}

export default CardIndexItem;