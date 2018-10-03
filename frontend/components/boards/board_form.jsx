import React from 'react';
import { withRouter } from 'react-router-dom';

class BoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "", 
      list_order: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  navigateToBoard(boardId) {
    this.props.history.push(`/boards/${boardId}/`);
  }

  handleSubmit(e) {
    e.preventDefault();
    const board = Object.assign({}, this.state);
    this.props.createBoard(board)
    .then(action => {
      let newBoard = action.payload.board;
      this.navigateToBoard(newBoard.id);
    });
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
        <input className={this.state.title ? "form-submit-enabled" : "form-submit-disabled"}
          type="submit"
          value="Create Board"
          disabled={!this.state.title}
        />
      </form>
    );
  }
}

export default withRouter(BoardForm);
