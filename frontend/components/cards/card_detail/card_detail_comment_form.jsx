import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      <div className="card-detail-section">
        <section className="fa-icon-container">
          <FontAwesomeIcon icon="comment"
            className="fa-icon-large"
            transform="up-2"
          />
        </section>
        <section className="card-detail-section-body">
          <h2>Add Comment</h2>
          <form onSubmit={this.handleSubmit}>
            <textarea name="" id=""
              placeholder="Thank you for your patience!"
            >
            </textarea>
            {/* <input type="submit" className="session-button" value="Save"/> */}
          </form> 
        </section>
      </div>
    );
  }
}

export default CardDetailCommentForm;