import { dataConstants } from '../constants';

export function dates(state = {}, action) {
  switch (action.type) {
    case dataConstants.GETDATES_REQUEST:
      return {
        loading: true
      };
    case dataConstants.GETDATES_SUCCESS:
      return {
        items: action.dates
      };
    case dataConstants.GETDATES_FAILURE:
      return { 
        error: action.error
      };    
    default:
      return state
  }
}