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
      <div>
        <span className="card-detail-section-icon">Icon</span>
        <section className="card-detail-section-body">
          Card Detail Comment Form 
        </section>
      </div>
    );
  }
}

export default CardDetailCommentForm;