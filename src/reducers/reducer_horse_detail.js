import { dataConstants } from '../constants';

export function horse(state = {}, action) {
  switch (action.type) {
    case dataConstants.GETHORSEDETAIL_REQUEST:
      return {
        loading: true
      };
    case dataConstants.GETHORSEDETAIL_SUCCESS:
      return {
        items: action.horse
      };
    case dataConstants.GETHORSEDETAIL_FAILURE:
      return { 
        error: action.error
      };    
    default:
      return state
  }
}


