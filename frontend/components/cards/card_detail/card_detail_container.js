import { connect } from 'react-redux';
import CardDetail from './card_detail';

import {
  selectCard
} from '../../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const cardId = ownProps.cardId;
  const card = ownProps.card ? ownProps.card : 
    selectCard(state.entities, cardId);
  let labels; 
  let comments; 
  return { card, labels, comments };
};

export default connect(
  mapStateToProps 
)(CardDetail);