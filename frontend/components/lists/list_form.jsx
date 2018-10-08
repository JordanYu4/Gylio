import React from 'react';
import merge from 'lodash/merge'; 

import { withRouter } from 'react-router-dom';

class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.board_id = props.match.params.id;
    this.state = {
      title: "", 
      board_id: this.board_id
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
    const list = Object.assign({}, this.state);
    this.props.createList(list)
    .then(action => {
      let newList = action.payload.list;
      console.log('newList', newList);
      let oldBoard = Object.assign({}, this.props.board);
      let editedBoard = merge(
        {}, 
        oldBoard,
        { list_order: this.props.board.list_order.concat(newList.id) }
      );
      console.log('editedBoard', editedBoard);
      this.props.editBoard(editedBoard);
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

export default withRouter(ListForm);
