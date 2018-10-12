import React from 'react';
import { merge } from 'lodash/merge';

class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      list_id: props.list.id
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
    const card = Object.assign({}, this.state);
    this.setState({ ['title']: "" });
    this.props.createCard(card)
    .then(action => {
      let newCard = action.payload.card;
      let currentList = Object.assign({}, this.props.list);
      let editedList = merge(
        {}, 
        currentList,
        { card_order: currentList.card_order.concat(newCard.id) }
      );
      this.props.editList(editedList);
    });
  }

  render() {
    const list = this.props.list;

    return (
      <form onSubmit={this.handleSubmit}
        className="toggle-card-form"
        id={list.id}
      >
        <input type="text"
          value={this.state.title}
          onChange={this.update('title')}
          className="card-form-input"
          placeholder="Enter card title..."
        />
        <section className="card-form-buttons">
          <input type="submit"
            value="Add card"
            className={
              this.state.title ? 
              "form-submit-enabled" : "form-submit-disabled"
            }
          />
          <span className="form-close js-card-form-close">&times;</span>
        </section>
      </form>
    );
  }
}

export default CardForm;