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
      <div></div>
    );
  }
}

export default CardDetailDescription;