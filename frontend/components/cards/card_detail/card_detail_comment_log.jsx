import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardDetailCommentLog = (card) => {

  return (
    <div className="card-detail-section">
      <section className="fa-icon-container">
        <FontAwesomeIcon icon="list-ul"
          className="fa-icon-large"
          transform="up-2"
        />
      </section>
      <section className="card-detail-section-body">
        Card Detail Comment Log
      </section>
    </div>
  );
};

export default CardDetailCommentLog;