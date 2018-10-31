import React from 'react';

import CardDetailContainer from './card_detail_container';

class CardDetailModal extends React.Component {
  constructor(props) {
    super(props);
  } 

  

  render() {

    return (
      <div className="modal">
        <section className="modal-screen js-modal-close"></section>
        <CardDetailContainer cardId={277}/>
      </div>
    );
  }
};

export default CardDetailModal;