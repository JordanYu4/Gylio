import * as CommentAPIUtil from '../util/comment_api_util';

export const CREATE_COMMENT = 'CREATE_COMMENT';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

// export const fetchCommentsForCard = cardId => dispatch => (
//   CommentAPIUtil.fetchCommentsForCard(cardId).then(comments => (
//     dispatch(receiveComments(comments))
//   ), errors => (
//     dispatch(receiveErrors(errors.responseJSON))
//   ))
// );

