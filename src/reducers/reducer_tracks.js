import { dataConstants } from '../constants';

export function tracks(state = {}, action) {
  switch (action.type) {
    case dataConstants.GETTRACKS_REQUEST:
      return {
        loading: true
      };
    case dataConstants.GETTRACKS_SUCCESS:
      return {
        items: action.tracks
      };
    case dataConstants.GETTRACKS_FAILURE:
      return { 
        error: action.error
      };    
    default:
      return state
  }
}
