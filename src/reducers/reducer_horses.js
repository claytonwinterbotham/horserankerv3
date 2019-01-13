import { dataConstants } from '../constants';

export function horses(state = {}, action) {
  switch (action.type) {
    case dataConstants.GETHORSES_REQUEST:
      return {
        loading: true
      };
    case dataConstants.GETHORSES_SUCCESS:
      return {
        items: action.horses
      };
    case dataConstants.GETHORSES_FAILURE:
      return { 
        error: action.error
      };    
    default:
      return state
  }
}
