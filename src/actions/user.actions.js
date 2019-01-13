import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './';
import { history } from '../helpers';

export const userActions = {
    login,
    logout,
    register,
    getAll,
    getAllRoles,
    getAllUserRoles,
    assignRoles,
    removeRoles,
    delete: _delete
};

function login(email, password) {
    return dispatch => {
        dispatch(request({ email }));
        userService.login(email, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    console.log("register function" + user.email + " " + user.password)
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('We just sent you an email. Please use it to confirm your email address.'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

function getAllRoles() {
    return dispatch => {
        dispatch(request());

        userService.getAllRoles()
            .then(
                roles => dispatch(success(roles)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALLROLES_REQUEST } }
    function success(roles) { return { type: userConstants.GETALLROLES_SUCCESS, roles } }
    function failure(error) { return { type: userConstants.GETALLROLES_FAILURE, error } }
}

function getAllUserRoles(email) {
    return dispatch => {
        dispatch(request(email));
        console.log("this is the user role")
        userService.getAllUserRoles(email)
            .then(
                userRoles => dispatch(success(userRoles)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALLUSERROLES_REQUEST } }
    function success(userRoles) { return { type: userConstants.GETALLUSERROLES_SUCCESS, userRoles } }
    function failure(error) { return { type: userConstants.GETALLUSERROLES_FAILURE, error } }
}

function assignRoles(email, role, callback) {
    return dispatch => {
        dispatch(request());
        userService.assignRoles(email, role)
            .then(
                message => { 
                    dispatch(success(message))
                    callback()
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                },
                
            );
    };

    function request() { return { type: userConstants.ASSIGN_ROLES_REQUEST } }
    function success(message) { return { type: userConstants.ASSIGN_ROLES_SUCCESS, message } }
    function failure(error) { return { type: userConstants.ASSIGN_ROLES_FAILURE, error } }
}

function removeRoles(email, role, callback) {
    return dispatch => {
        dispatch(request());
        userService.removeRoles(email, role)
            .then(
                message => { 
                    dispatch(success(message))
                    callback()
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                },
                
            );
    };

    function request() { return { type: userConstants.REMOVE_ROLES_REQUEST } }
    function success(message) { return { type: userConstants.REMOVE_ROLES_SUCCESS, message } }
    function failure(error) { return { type: userConstants.REMOVE_ROLES_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                () => { 
                    dispatch(success(id));
                },
                error => {
                    dispatch(failure(id, error));
                }
            );
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}