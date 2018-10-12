import React from 'react';

import CardIndexItemContainer from '../cards/card_index_item_container';
import CardFormContainer from '../cards/card_form_container';

class ListIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchCardsForList(this.props.listId);
  }
  
  componentDidMount() {
    console.log(this.props);
    console.log('card order', this.props.list.card_order)
  }
  
  render() {
    this.list = this.props.list;

    if (typeof this.list.card_order === "undefined" ||
        typeof this.props.cards === "undefined") {
      return null;
    }
    const modalButtonText = this.list.card_order.length == 0 ? 
      "a card" : "another card";
  
    const { cards, list: {card_order} } = this.props;
    const indexedCards = jQuery.isEmptyObject(cards) ? null : 
      card_order.map(cardId => (
        <CardIndexItemContainer 
          key={cardId}
          cardId={cardId}
          card={cards[cardId]}
        />
      )
    );
    
    return (
      <li className="list-index-item">
        <h1>{this.list.title}</h1>
        <ul className="card-index">
          { indexedCards }
        </ul>
        <section className="card-form-container">
          <span className="form-toggle-button js-form-open">
            + Add {modalButtonText}
          </span>
          <CardFormContainer listId={this.props.listId}/>
        </section>
      </li>
    )
  }
};

export default ListIndexItem;