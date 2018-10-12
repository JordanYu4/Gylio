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

  render() {
    this.list = this.props.list;

    if (typeof this.list.card_order === "undefined" ||
        typeof this.props.cards === "undefined") {
      return null;
    }
    const cardFormButtonText = this.list.card_order.length == 0 ? 
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
    
    return <li className="list-index-item">
        <section className="list-index-item-header">
          <h1>{this.list.title}</h1>
        </section>
        <ul className="card-index">{indexedCards}</ul>
        <section className="card-form-container">
          <div id={this.props.listId} className="card-form-toggle-button js-card-form-open">
            + Add {cardFormButtonText}
          </div>
          <CardFormContainer listId={this.props.listId} />
        </section>
      </li>;
  }
};

export default ListIndexItem;