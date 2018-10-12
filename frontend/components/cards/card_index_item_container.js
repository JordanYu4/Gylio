import { connect } from 'react-redux';
import CardIndexItem from './card_index_item';

import {
  editCard
} from '../../actions/card_actions';
import {
  selectCard
} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const cardId = ownProps.cardId;
  const card = ownProps.card ? ownProps.card : 
    selectCard(state.entities, cardId);
  let labels; 
  let comments; 
  return { cardId, card, labels, comments };
};

const mapDispatchToProps = dispatch => ({
  editCard: card => dispatch(editCard(card))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(CardIndexItem);