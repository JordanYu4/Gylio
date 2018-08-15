import React from 'react';

import BoardFormContainer from './board_form_container';

const BoardFormModal = () => {
  return (
    <div className="modal">
      <section className="modal-screen js-modal-close"></section>
      <section className="modal-form">
        <BoardFormContainer />
      </section>
    </div>
  );
}

export default BoardFormModal;
