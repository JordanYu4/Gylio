import React from 'react';

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
    if (jQuery.isEmptyObject(this.props.card)) return null;
    const cardTitle = this.state.title;
    const listTitle = this.props.list.title;
    console.log(cardTitle, listTitle);

    return (
      <div className="card-detail-header">
        <h1>{cardTitle}</h1>
        <h3>in list {listTitle}</h3>
        {/* <form onSubmit={this.handleSubmit} 
          className="card-title-form" 
        >
          <input type="text"
            value={this.state.title}
            onChange={this.update('title')}
            className="card-title-input"
          />
        </form>  */}
      </div>
    );
  }
}

export default CardDetailHeader;