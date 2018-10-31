import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import isEqual from 'lodash/isEqual';

import CardIndexItem from '../cards/card_index_item';
import CardFormContainer from '../cards/card_form_container';

class ListIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardOrder: []
    };
    this.handleDeleteList = this.handleDeleteList.bind(this);
  }

  componentWillMount() {
    this.props.fetchCardsForList(this.props.listId);
  }
  
  componentDidUpdate() {
    const currentState = { 
      cardOrder: this.props.list.card_order 
    };
    if (!isEqual(currentState, this.state)) {
      this.setState(currentState);
    }
  }

  handleDeleteList(e) {
    e.preventDefault();
    this.props.deleteList(this.props.listId)
    .then(this.props.removeList(this.props.listId));
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
    const indexedCards = card_order.map((cardId, idx) => (
      // <Draggable
      //   draggableId={cardId}
      //   index={idx}
      // >
        <CardIndexItem
          key={cardId}
          cardId={cardId}
          card={cards[cardId]}
          passCardId={this.props.passCardId} 
        />
      // {/* </Draggable> */}
    ));
    
    return (
      <li className="list-index-item">
        <section className="list-index-item-header">
          <h1>{this.list.title}</h1>
          <form onClick={this.handleDeleteList}
            className="list-delete-form"  
          >
            <button className="list-delete-button">
              <i className="icon-trash"></i>
            </ button>
          </form>
        </section>
        {/* <Droppable droppableId="droppable"> */}
          <ul className="card-index">
            {jQuery.isEmptyObject(cards) ? null : indexedCards}
          </ul>
        {/* </Droppable> */}
        <section className="card-form-container">
          <div id={this.props.listId} className="card-form-toggle-button js-card-form-open">
            + Add {cardFormButtonText}
          </div>
          <CardFormContainer listId={this.props.listId} />
        </section>
      </li>
    );
  }
};

export default ListIndexItem;