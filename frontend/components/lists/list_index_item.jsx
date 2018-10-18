import React from 'react';

import CardIndexItem from '../cards/card_index_item';
import CardFormContainer from '../cards/card_form_container';

class ListIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteList = this.handleDeleteList.bind(this);
  }

  componentWillMount() {
    this.props.fetchCardsForList(this.props.listId);
  }

  handleDeleteList() {
    let boardId = this.props.list.board_id;
    this.props.deleteList(this.props.listId)
    .then(this.props.fetchBoard(boardId));
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
    const indexedCards = card_order.map(cardId => (
      <CardIndexItem
        key={cardId}
        cardId={cardId}
        card={cards[cardId]}
      />
    ));
    
    return <li className="list-index-item">
        <section className="list-index-item-header">
          <h1>{this.list.title}</h1>
          <form onClick={this.handleDeleteList}
            className="list-delete-form"  
          >
            <input type="button"
              className="list-delete-button"
            />
          </form>
        </section>
        <ul className="card-index">
          {jQuery.isEmptyObject(cards) ? null : indexedCards}
        </ul>
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