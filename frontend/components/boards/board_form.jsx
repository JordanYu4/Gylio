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
      <div className="board-form-container">
        <form onSubmit={this.handleSubmit} className="board-form-box">
          <input type="text"
            value={this.state.title}
            onChange={this.update('title')}
            className="board-form-input"
          />
          <span className="modal-close js-modal-close">&times;</span>
          <input className="board-submit" type="submit" value="Create Board" />
        </form>
      </div>
    );
  }
}

export default BoardForm;
