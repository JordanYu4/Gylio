import React from 'react';

import CardDetailContainer from './card_detail_container';

const CardDetailModal = (props) => {

  return (
    <div className="modal">
      <section className="modal-screen js-modal-close"></section>
      <CardDetailContainer cardId={props.cardId}/>
    </div>
  );
};

// class CardDetailModal extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cardId: null
//     };
//   } 

//   passCardId(newCardId) {
//     this.setState({
//       cardId: newCardId
//     })
//   }

//   render() {

//     return (
//       <div className="modal">
//         <section className="modal-screen js-modal-close"></section>
//         <CardDetailContainer cardId={this.state.cardId}/>
//       </div>
//     );
//   }
// };

export default CardDetailModal;