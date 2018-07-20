import * as Util from '../utils.js'

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS"

export const fetchUsers = () => dispatch => (
  Util.fetchUsers().then(res => dispatch(receiveAllUsers(res.data)))
)




const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
})
