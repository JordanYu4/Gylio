import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions';

import GlobalHeader from './global_header';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobalHeader);
