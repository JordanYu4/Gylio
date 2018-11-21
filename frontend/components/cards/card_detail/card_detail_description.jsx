import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CardDetailDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.card.description
    };
  }

  render() {

    return <div className="card-detail-section">
        <section className="fa-icon-container">
          <FontAwesomeIcon icon="align-left" 
            className="fa-icon-large" 
            transform="up-2"
          />
        </section>
        <section className="card-detail-section-body">
          Card Detail Description
        </section>
      </div>;
  }
}

export default CardDetailDescription;