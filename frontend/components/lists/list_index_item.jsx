import React from 'react';

import CardFormContainer from '../cards/card_form_container';

const ListIndexItem = ({ list }) => {
  return(
    <li className="list-index-item">
      <h1>{list.title}</h1>
      <ul className="card-index">

      </ul>
      <section className="card-form-container">
        <span className="form-toggle-button js-form-open">
          + Add another card
        </span>
        <CardFormContainer listId={list.id}/>
      </section>
    </li>
  );
};

export default ListIndexItem;