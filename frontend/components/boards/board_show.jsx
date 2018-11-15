import React from 'react';

import BoardHeaderContainer from './board_header_container';
import ListIndexContainer from '../lists/list_index_container';
import CardDetailModal from '../cards/card_detail/card_detail_modal';

class BoardShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cardId: null
    };
    this.passCardId = this.passCardId.bind(this);
  }
      
  passCardId(newCardId) {
    this.setState({
      cardId: newCardId
    })
  }
       
  render() { return (
      <div className="board-show">
        <BoardHeaderContainer />
        <ListIndexContainer passCardId={this.passCardId} />
        <CardDetailModal cardId={this.state.cardId} />
      </div>
    );
  }
}
        
export default BoardShow;
        