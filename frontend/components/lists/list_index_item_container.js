import { connect } from 'react-redux';
import ListIndexItem from './list_index_item';

import {
  fetchCardsForList
} from '../../actions/card_actions';
import {
  editList, 
  deleteList
} from '../../actions/list_actions';
import { 
  selectList, 
  selectCardsForList 
} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const listId = ownProps.listId;
  const list = ownProps.list ? ownProps.list : selectList(state.entities, listId);
  const cards = list.card_order ? selectCardsForList(state.entities, list) : {};
  return { listId, list, cards };
};

const mapDispatchToProps = dispatch => ({
  editList: list => dispatch(editList(list)),
  deleteList: listId => dispatch(deleteList(listId)),
  fetchCardsForList: listId => dispatch(fetchCardsForList(listId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListIndexItem);