import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CardDetailHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.card.title
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
    this.props.editCard(card);
  }

  render() {
    // const cardTitle = this.state.title;
    const cardTitle = this.props.card.title;
    const listTitle = this.props.currentList.title;
    if (!cardTitle || !listTitle) return null;

    return (
      <div className="card-detail-header">
        {/* <i className="card-detail-header-icon"></i> */}
        <FontAwesomeIcon icon="newspaper" 
          className="card-detail-header-icon" 
          transform="up-2"
        />
        <section className="card-detail-header-body">
          <h1>{cardTitle}</h1>
          <br />
          <label className="parent-list-indicator">
            in list <h3>{listTitle}</h3>
          </label>
          {/* <form onSubmit={this.handleSubmit} 
            className="card-title-form" 
          >
            <input type="text"
              value={this.state.title}
              onChange={this.update('title')}
              className="card-title-input"
            />
          </form>  */}
        </section>
        <section className="card-detail-close-button-container">
          <span className="card-detail-close-button js-modal-close">&times;</span>
        </section>
      </div>
    );
  }
}

export default CardDetailHeader;