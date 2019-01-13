import { userConstants } from '../constants';

export function assignRoles(state = {}, action) {
  switch (action.type) {
    case userConstants.ASSIGN_ROLES_REQUEST:
      return {
        loading: true
      };
    case userConstants.ASSIGN_ROLES_SUCCESS:
      return {
        items: action.message
      };
    case userConstants.ASSIGN_ROLES_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}