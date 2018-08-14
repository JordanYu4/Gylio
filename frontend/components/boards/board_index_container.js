import { connect } from 'react-redux';
import { fetchBoards } from '../../actions/board_actions';
import { getAllBoards } from '../../reducers/selectors';

import BoardIndex from './board_index';

const mapStateToProps = state => {
  return {
    boards: getAllBoards(state.entities),
    // board_memberships: board_memberships ?
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBoards: () => dispatch(fetchBoards())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardIndex);
