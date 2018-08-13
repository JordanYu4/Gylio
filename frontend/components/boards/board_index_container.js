import { connect } from 'react-redux';
import { fetchBoards } from '../../actions/board_actions';

import BoardIndex from './board_index';

const mapStateToProps = ({ entities: { boards } }) => {
  return {
    boards: boards, // board_memberships?
    // board_memberships: board_memberships
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBoards: () => dispatch(fetchBoards())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardIndex);
