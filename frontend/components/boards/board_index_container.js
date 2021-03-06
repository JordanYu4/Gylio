import { connect } from 'react-redux';
import { fetchBoards } from '../../actions/board_actions';
import { getAllBoards } from '../../reducers/selectors';

import BoardIndex from './board_index';

const mapStateToProps = state => {
  return {
    boards: getAllBoards(state.entities),
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBoards: () => dispatch(fetchBoards())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardIndex);
