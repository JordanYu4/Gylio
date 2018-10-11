import React from 'react';

import CardFormContainer from '../cards/card_form_container';

class ListIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchCardsForList(this.props.listId);
    console.log(this.props);
    const { list }= this.props;
    this.list = list;
  }
  
  componentDidMount() {
    console.log(this.props);
    console.log('card order', this.props.list.card_order)
  }
  
  render() {
    if (typeof this.props.list.card_order === "undefined" ||
        typeof this.props.cards === "undefined") {
      return null;
    }
    const modalButtonText = this.list.card_order.length == 0 ? 
      "a card" : "another card";
  
    const { card_order } = this.list;
    // const indexedCards = jQuery.isEmptyObject
    
    return (
      <li className="list-index-item">
        <h1>{this.list.title}</h1>
        <ul className="card-index">
          {/* { indexedCards } */}
        </ul>
        <section className="card-form-container">
          <span className="form-toggle-button js-form-open">
            + Add {modalButtonText}
          </span>
          <CardFormContainer listId={this.listId}/>
        </section>
      </li>
    )
  }
};

export default ListIndexItem;