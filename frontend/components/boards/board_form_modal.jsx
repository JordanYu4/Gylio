import React from 'react';

import BoardForm from './board_form';

const BoardFormModal = () => {
  return (
    <div className="modal">
      <section className="modal-screen js-modal-close"></section>
      <section className="modal-form">
        <BoardForm />
      </section>
    </div>
  );
}

export default BoardFormModal;
