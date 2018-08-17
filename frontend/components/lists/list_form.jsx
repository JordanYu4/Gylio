import React from 'react';

class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      board_id: props.boardId
    }
    // console.log(props);
    // console.log(props.boardId);
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
    console.log(this.props);
    console.log(this.state);
    console.log(list);
    this.props.createList(list);
  }

  render() {

    return(
      <form onSubmit={this.handleSubmit} className="list-form-opened">
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
