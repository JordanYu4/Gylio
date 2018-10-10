import { connect } from 'react-redux';
import ListIndexItem from './list_index_item';

import {
  fetchCardsForList
} from '../../actions/card_actions';
import {
  editList, 
  deleteList
} from '../../actions/list_actions';

const mapStateToProps = (state, ownProps) => ({
  list: ownProps.list, 
  ownProps: ownProps
});

const mapDispatchToProps = dispatch => ({
  editList: list => dispatch(editList(list)),
  deleteList: listId => dispatch(deleteList(listId)),
  fetchCardsForList: listId => dispatch(fetchCardsForList(listId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListIndexItem);