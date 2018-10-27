import React from 'react';

import CardDetailHeaderContainer from './card_detail_header_container';
import CardDetailDescription from './card_detail_description_container';
import CardDetailCommentForm from './card_detail_comment_form_container';
import CardDetailCommentLog from './card_detail_comment_log';

class CardDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="card-detail-container modal-form">
        <CardDetailHeaderContainer card={this.props.card} />
      </div>
    );
  }

  // render() {
  //   return(
  //     <div className="card-detail-placeholder modal-form">
  //       <span>Card detail currently under construction.</span>
  //       <span>We appreciate your patience!</span>
  //     </div>
  //   );
  // }
}

export default CardDetail;