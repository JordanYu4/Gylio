import React from 'react';

class CardDetailCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentBody: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    
    return (
      <div></div>
    );
  }
}

export default CardDetailCommentForm;