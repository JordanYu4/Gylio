import React from 'react';

class BoardShow extends React.Component {
  componentDidMount() {
    this.props.fetchBoard(this.props.boardId);
  }

  render() {
    const board = this.props.board;
    console.log(this.props.boardId);
    console.log(this.props.boardId.__proto__);
    console.log(board);
    if (!board) return null;


    return (
      <div>
        <h1>{board.title}</h1>
      </div>
    );
  }
};

export default BoardShow;
