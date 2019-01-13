import { combineReducers } from 'redux';
import { tracks } from './reducer_tracks';
import { dates } from './reducer_dates';
import { races } from './reducer_races';
import { horses } from './reducer_horses';
import { horse } from './reducer_horse_detail';
import ActiveDate from './reducer_active_date';
import ActiveTrack from './reducer_active_track';
import ActiveRace from './reducer_active_race';
import ActiveHorse from './reducer_active_horse';
import { authentication }  from './reducer_authentication';
import { registration } from './reducer_registration';
import { users } from './reducer_users';
import { roles } from './reducer_roles';
import { userRoles } from './reducer_user_roles';
import { assignRoles } from './reducer_assign_roles';
import { removeRoles } from './reducer_remove_roles';
import { alert } from './reducer_alert';


const rootReducer = combineReducers({
  tracks,
  dates,
  races,
  horses,
  horse,
  activeTrack: ActiveTrack,
  activeDate: ActiveDate,
  activeRace: ActiveRace,
  activeHorse: ActiveHorse,
  authentication,
  registration,
  users,
  roles,
  userRoles,
  assignRoles,
  removeRoles,
  alert
  
});

export default rootReducer;
