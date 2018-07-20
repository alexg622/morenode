import { RECEIVE_ALL_USERS } from '../actions/user_actions.js'
import merge from 'lodash/merge'

const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  switch(action.type) {
    case RECEIVE_ALL_USERS:
      return merge({}, action.users)
    default:
      return oldState
  }
}

export default UsersReducer
