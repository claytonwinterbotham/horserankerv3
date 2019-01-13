import { userConstants } from '../constants';

export function userRoles(state = {}, action) {
  switch (action.type) {
    case userConstants.GETALLUSERROLES_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALLUSERROLES_SUCCESS:
      return {
        items: action.userRoles
      };
    case userConstants.GETALLUSERROLES_FAILURE:
      return { 
        error: action.error
      };    
    default:
      return state
  }
}