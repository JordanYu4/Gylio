import { connect } from 'react-redux';
import CardDetailDescription from './card_detail_description';

import { editCard } from '../../../actions/card_actions';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({
  editCard: card => dispatch(editCard(card))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardDetailDescription);