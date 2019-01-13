import { dataConstants } from '../constants';
import { dataService } from '../services';
import { alertActions } from './';

export const dataActions = {
    fetchTracks,
    fetchDates,
    fetchRaces,
    fetchHorses,
    fetchHorseDetail,
    selectTrack,
    selectDate,
    selectRace,
    selectHorse
};

function fetchTracks() {
    return dispatch => {
        dispatch(request());
        dataService.fetchTracks()
            .then(
                tracks => { 
                    dispatch(success(tracks));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
    
    function request() { return { type: dataConstants.GETTRACKS_REQUEST} }
    function success(tracks) { return { type: dataConstants.GETTRACKS_SUCCESS, tracks } }
    function failure(error) { return { type: dataConstants.GETTRACKS_FAILURE, error } }
}

function fetchDates(trackid) {
    return dispatch => {
        dispatch(request());
        dataService.fetchDates(trackid)
            .then(
                dates => { 
                    dispatch(success(dates));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request() { return { type: dataConstants.GETDATES_REQUEST} }
    function success(dates) { return { type: dataConstants.GETDATES_SUCCESS, dates } }
    function failure(error) { return { type: dataConstants.GETDATES_FAILURE, error } }
}

function fetchRaces(trackid, date) {
    return dispatch => {
        dispatch(request());
        dataService.fetchRaces(trackid, date)
            .then(
                races => { 
                    dispatch(success(races));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request() { return { type: dataConstants.GETRACES_REQUEST} }
    function success(races) { return { type: dataConstants.GETRACES_SUCCESS, races } }
    function failure(error) { return { type: dataConstants.GETRACES_FAILURE, error } }
}

function fetchHorses(raceid, trackid, date) {
    return dispatch => {
        dispatch(request());
        dataService.fetchHorses(raceid, trackid, date)
            .then(
                horses => { 
                    dispatch(success(horses));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request() { return { type: dataConstants.GETHORSES_REQUEST} }
    function success(horses) { return { type: dataConstants.GETHORSES_SUCCESS, horses } }
    function failure(error) { return { type: dataConstants.GETHORSES_FAILURE, error } }
}

function fetchHorseDetail(raceid, horseid) {
    return dispatch => {
        dispatch(request());
        dataService.fetchHorseDetail(raceid, horseid)
            .then(
                horse => { 
                    dispatch(success(horse));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request() { return { type: dataConstants.GETHORSEDETAIL_REQUEST} }
    function success(horse) { return { type: dataConstants.GETHORSEDETAIL_SUCCESS, horse } }
    function failure(error) { return { type: dataConstants.GETHORSEDETAIL_FAILURE, error } }
}




function selectTrack(track){
    return {
        type: dataConstants.TRACK_SELECTED,
        payload: track
    };
}

function selectDate(date){
    return {
        type: dataConstants.DATE_SELECTED,
        payload: date
    };
}

function selectRace(race, callback){
    callback()
    return {
        type: dataConstants.RACE_SELECTED,
        payload: race
    };
}

export function selectHorse(horse, callback){
    callback()
    return {
        type: dataConstants.HORSE_SELECTED,
        payload: horse
    };
}
