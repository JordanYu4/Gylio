import React from 'react';

class CardForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
  }

  componentDidUpdate() {
    console.log(this.props);
  }

  render() {

    return (
      <div></div>
    );
  }
}

export default CardForm;