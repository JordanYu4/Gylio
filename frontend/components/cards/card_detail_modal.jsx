import React from 'react';

import CardDetailContainer from './card_detail_container';

const CardDetailModal = () => (
  <div className="modal">
    <section className="modal-screen js-modal-close"></section>
    <CardDetailContainer />
  </div>
);

export default CardDetailModal;