import React from 'react';

class CardDetailDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.card.description
    };
  }

  render() {

    return (
      <div>
        <span className="card-detail-section-icon">Icon</span>
        <section className="card-detail-section-body">
          Card Detail Description
        </section>
      </div>
    );
  }
}

export default CardDetailDescription;