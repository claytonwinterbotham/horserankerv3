import { dataConstants } from '../constants';
//state argument is not application state, only the state this reducer is reponsible for

export default function(state = null, action) {
    switch(action.type){
    case dataConstants.HORSE_SELECTED:
        return action.payload;
    default:
        return state
    }
}