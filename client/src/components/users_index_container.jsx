import { connect } from 'react-redux';
import UsersIndex from './users_index.jsx'
import { fetchUsers } from '../actions/user_actions'

const mapStateToProps = state => ({
  users: Object.keys(state.users).map(id => state.users[id])
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersIndex);
