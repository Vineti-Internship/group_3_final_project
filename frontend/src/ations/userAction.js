import {userService} from "../services/userService";
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT} from "../constants/userConstants";

const login = (username, password) => {
  return dispatch => {
    dispatch(request({username}));

    userService.login(username, password)
      .then(
        user => {
          dispatch(success(user));
        },
        error => {
          dispatch(failure(error));
          console.log(error);
        }
      );
  };

  function request(user) {
    return {type: LOGIN_REQUEST, user}
  }

  function success(user) {
    return {type: LOGIN_SUCCESS, user}
  }

  function failure(error) {
    return {type: LOGIN_FAILURE, error}
  }
};

const logout = () => {
  userService.logout();
  return {type: LOGOUT};
};

export const userActions = {
  login,
  logout,
};