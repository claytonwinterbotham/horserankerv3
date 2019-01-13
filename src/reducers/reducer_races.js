import { dataConstants } from '../constants';

export function races(state = {}, action) {
  switch (action.type) {
    case dataConstants.GETRACES_REQUEST:
      return {
        loading: true
      };
    case dataConstants.GETRACES_SUCCESS:
      return {
        items: action.races
      };
    case dataConstants.GETRACES_FAILURE:
      return { 
        error: action.error
      };    
    default:
      return state
  }
}
