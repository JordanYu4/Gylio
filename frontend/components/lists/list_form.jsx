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

  update(field) { 
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const list = Object.assign({}, this.state);
    this.setState({ ['title']: "" });
    this.props.createList(list)
    .then(action => {
      this.props.fetchBoard(this.board_id)
    });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} 
        className="toggle-list-form animated fadeIn"
      >
        <input type="text"
          value={this.state.title}
          onChange={this.update('title')}
          className="list-form-input"
          placeholder="Enter list title..."
        />
        <section className="list-form-buttons">
          <input type="submit"
            value="Add List"
            className={
              this.state.title ? 
              "form-submit-enabled" : "form-submit-disabled"
            }
            disabled={!this.state.title}
          />
          <span className="form-close js-list-form-close">&times;</span>
        </section>
      </form>
    );
  }
}

export default withRouter(ListForm);
