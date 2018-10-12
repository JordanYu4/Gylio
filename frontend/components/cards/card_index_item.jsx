import React from 'react';

const CardIndexItem = (cardId, card) => {
  console.log(cardId);
  console.log(card);
  
  return(
    <li>
      {card.title}
    </li>
  );
}

export default CardIndexItem;