import React from 'react';
import merge from 'lodash/merge';

class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) { // refactor into shared helper file and bind to this?
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let list = merge({}, this.state, {board_id: this.props.board.id} );
    console.log('list', list);
    console.log(this.props);
    this.props.createList(list)
    .then(action => {
      let newList = action.payload.list;
      console.log(newList);
      this.board.listIds.push(newList.id);
    });
  }

  render() {

    return(
      <form onSubmit={this.handleSubmit} className="toggle-form">
        <input type="text"
          value={this.state.title}
          onChange={this.update('title')}
          className="list-form-input"
          placeholder="Enter list title..."
        />
        <section className="list-form-buttons">
          <input className={this.state.title ? "form-submit-enabled" : "form-submit-disabled"}
            type="submit"
            value="Add List"
            disabled={!this.state.title}
          />
          <span className="form-close js-form-close">&times;</span>
        </section>
      </form>
    );
  }
}

export default ListForm;
