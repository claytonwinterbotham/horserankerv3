import { userConstants } from '../constants';

export function removeRoles(state = {}, action) {
  switch (action.type) {
    case userConstants.REMOVE_ROLES_REQUEST:
      return {
        loading: true
      };
    case userConstants.REMOVE_ROLES_SUCCESS:
      return {
        items: action.message
      };
    case userConstants.REMOVE_ROLES_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}