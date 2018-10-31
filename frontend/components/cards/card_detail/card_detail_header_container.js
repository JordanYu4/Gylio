import { connect } from 'react-redux';
import CardDetailHeader from './card_detail_header';

import { selectList } from '../../../reducers/selectors';
import { editCard } from '../../../actions/card_actions';

const mapStateToProps = (state, ownProps) => {
  const card = ownProps.card;
  const currentList = selectList(state.entities, card.list_id);
  
  return { card, currentList };
};

const mapDispatchToProps = dispatch => ({
  editCard: card => dispatch(editCard(card))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardDetailHeader);