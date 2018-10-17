import React from 'react';
import merge from 'lodash/merge';

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
      const { id, board_id } = this.props.list;
      this.props.fetchList(board_id, id);
    });
  }

  render() {
    const list = this.props.list;

    return (
      <form onSubmit={this.handleSubmit}
        className="toggle-card-form"
        id={list.id}
      >
        <textarea onChange={this.update('title')}
          value={this.state.title}
          className="card-form-input"
          placeholder="Enter a title for this card..."
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