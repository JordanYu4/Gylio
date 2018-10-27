import { connect } from 'react-redux';
import CardDetailHeader from './card_detail_header';

import { selectCard } from '../../../reducers/selectors';
import { editCard } from '../../../actions/card_actions';

const mapStateToProps = (state, ownProps) => ({
  card: selectCard(state.entities, ownProps.cardId)
});

const mapDispatchToProps = dispatch => ({
  editCard: card => dispatch(editCard(card))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardDetailHeader);