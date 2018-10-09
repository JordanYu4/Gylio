import React from 'react';

import CardFormContainer from '../cards/card_form_container';

const ListIndexItem = ({ list }) => {

  const modalButtonText = list.card_order.length == 0 ? 
    "a card" : "another card";

  const { card_order } = list;
  const indexedCards = jQuery.isEmptyObject

  return(
    <li className="list-index-item">
      <h1>{list.title}</h1>
      <ul className="card-index">
        { indexedCards }
      </ul>
      <section className="card-form-container">
        <span className="form-toggle-button js-form-open">
          + Add {modalButtonText}
        </span>
        <CardFormContainer listId={list.id}/>
      </section>
    </li>
  );
};

export default ListIndexItem;