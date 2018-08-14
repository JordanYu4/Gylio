import React from 'react';

class BoardForm extends React.Component {
  constructor(props) {
    super(props);
    // currentUser?
    this.state = {
      title: ""
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
    const newBoard = Object.assign({}, this.state);
    // create board and redirect
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} className="board-form-container">
        <section className="board-form-main">
          <input type="text"
            value={this.state.title}
            onChange={this.update('title')}
            className="board-form-input"
            placeholder="Add board title"
          />
          <span className="modal-close js-modal-close">&times;</span>
        </section>
        <input className="board-submit" type="submit" value="Create Board" />
      </form>
    );
  }
}

export default BoardForm;
