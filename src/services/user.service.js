import { authHeader, config } from '../helpers';

export const userService = {
    login,
    logout,
    register,
    getAll,
    getAllRoles,
    getAllUserRoles,
    assignRoles,
    removeRoles,
    getById,
    update,
    delete: _delete
};

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Email: email, Password: password })
    };
    return fetch(config.apiUrl + '/tokenapi/login', requestOptions)
        .then(handleResponse, handleError)
        .then(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token.value.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(config.apiUrl + '/tokenapi/ProtectedUsers', requestOptions).then(handleResponse, handleError);
}

function getAllRoles() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(config.apiUrl + '/tokenapi/GetRoles', requestOptions).then(handleResponse, handleError);
}

function getAllUserRoles(email) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(config.apiUrl + '/tokenapi/GetUserRoles/' + email, requestOptions).then(handleResponse, handleError);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(config.apiUrl + '/users/' + id, requestOptions).then(handleResponse, handleError);
}



function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({Email: user.email, Password: user.password})
    };

    return fetch(config.apiUrl + '/tokenapi/register', requestOptions)

     .then(handleResponse, handleError)
    // .then((response) =>{
    //     return console.log("RESPONSE!!!!" + JSON.stringify(response));
    // })
    // .then(user => {
    //     // login successful if there's a jwt token in the response
    //     if (user && user.token.value.token) {
    //         // store user details and jwt token in local storage to keep user logged in between page refreshes
    //         localStorage.setItem('user', JSON.stringify(user));
    //     }

    //     return user;
    // });
}

function assignRoles(email, role) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Email: email, Role: role })
    };
    return fetch(config.apiUrl + '/tokenapi/assign', requestOptions)
        .then(handleResponse, handleError)
}

function removeRoles(email, role) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Email: email, Role: role })
    };
    return fetch(config.apiUrl + '/tokenapi/removeuserrole', requestOptions)
        .then(handleResponse, handleError)
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(config.apiUrl + '/users/' + user.id, requestOptions).then(handleResponse, handleError);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(config.apiUrl + '/users/' + id, requestOptions).then(handleResponse, handleError);
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