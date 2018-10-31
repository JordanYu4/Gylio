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
    const { card, labels, comments } = this.props;
    
    return(
      <div className="card-detail-container modal-form">
        <CardDetailHeaderContainer card={card} labels={labels} />
        <div className="card-detail-body">
          <section className="card-detail-main">
            {/* <CardLabelsAndDueDate card={card}/>  */}
            <CardDetailDescription card={card} />
            <CardDetailCommentForm cardId={card.id} />
            <CardDetailCommentLog comments={comments} />
          </section>
          <ul className="card-detail-sidebar">
            <li className="card-detail-sidebar-props">

            </li>
            <li className="card-detail-sidebar-actions">

            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CardDetail;