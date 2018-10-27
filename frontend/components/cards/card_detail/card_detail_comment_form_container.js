import { connect } from 'react-redux';
import CardDetailCommentForm from './card_detail_comment_form';

import { createComment } from '../../../actions/comment_actions';

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment))
})

export default connect(
  {}, 
  mapDispatchToProps
)(CardDetailCommentForm);