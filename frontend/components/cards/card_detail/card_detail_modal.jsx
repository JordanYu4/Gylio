import React from 'react';

import CardDetailContainer from './card_detail_container';

const CardDetailModal = (props) => {

  return (
    <div className="modal">
      <section className="modal-screen js-modal-close"></section>
      <CardDetailContainer cardId={props.cardId}/>
    </div>
  );
};

export default CardDetailModal;