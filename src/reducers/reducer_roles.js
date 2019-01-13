import { userConstants } from '../constants';

export function roles(state = {}, action) {
  switch (action.type) {
    case userConstants.GETALLROLES_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALLROLES_SUCCESS:
      return {
        items: action.roles
      };
    case userConstants.GETALLROLES_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}