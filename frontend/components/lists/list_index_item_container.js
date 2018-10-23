import { connect } from 'react-redux';
import ListIndexItem from './list_index_item';

import {
  fetchCardsForList
} from '../../actions/card_actions';
import {
  editList, 
  deleteList
} from '../../actions/list_actions';
import { fetchBoard } from '../../actions/board_actions';
import { 
  selectList, 
  selectCardsForList 
} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const listId = ownProps.listId;
  const list = ownProps.list ? 
    ownProps.list : selectList(state.entities, listId);
  const cards = list.card_order ? 
    selectCardsForList(state.entities, list) : {};
  const listIndex = ownProps.listIndex
  return { listId, list, cards, listIndex };
};

const mapDispatchToProps = dispatch => ({
  fetchBoard: boardId => dispatch(fetchBoard(boardId)),
  editList: list => dispatch(editList(list)),
  deleteList: listId => dispatch(deleteList(listId)),
  fetchCardsForList: listId => dispatch(fetchCardsForList(listId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListIndexItem);