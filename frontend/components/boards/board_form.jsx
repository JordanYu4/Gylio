import React from 'react';
import { withRouter } from 'react-router-dom';

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
    return e => {
      // if (e.target.value !== "") {
      //   document.getElementById("sub").disabled = false;
      // }
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  navigateToBoard(boardId) {
    this.props.history.push(`/boards/${boardId}/`);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("trying to submit");
    const board = Object.assign({}, this.state);
    this.props.createBoard(board).then(
      ({ board }) => this.navigateToBoard(board.id)
    );
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
        <input id="sub"
          className={this.state.title ? "board-submit-enabled" : "board-submit-disabled"}
          type="submit"
          value="Create Board"
          disabled={!this.state.title}
        />
      </form>
    );
  }
}

export default withRouter(BoardForm);
