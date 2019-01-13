import { authHeader, config } from '../helpers';

export const dataService = {
    fetchTracks,
    fetchDates,
    fetchRaces,
    fetchHorses,
    fetchHorseDetail,
};

function fetchTracks() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch( config.horseApiUrl + 'trackdata', requestOptions).then(handleResponse, handleError);
}

function fetchDates(trackid) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch( config.horseApiUrl + `datedata/${trackid}` , requestOptions).then(handleResponse, handleError);
}

function fetchRaces(trackid, date) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch( config.horseApiUrl + `racedata/${trackid}/${date}` , requestOptions).then(handleResponse, handleError);
}

function fetchHorses(raceid, trackid, date) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch( config.horseApiUrl + `horsedata/${raceid}/${trackid}/${date}` , requestOptions).then(handleResponse, handleError);
}

function fetchHorseDetail(raceid, horseid) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch( config.horseApiUrl + `horsedata/${raceid}/${horseid}` , requestOptions).then(handleResponse, handleError);
}


function handleResponse(response) {
    return new Promise((resolve, reject) => {
        if (response.ok) {
            // return json if it was returned in the response
            var contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                response.json().then(json => resolve(json));
            } else {
                resolve();
            }
        } else {
            // return error message from response body
            response.text().then(text => reject(text));
        }
    });
}

function handleError(error) {
    return Promise.reject(error && error.message);
}





