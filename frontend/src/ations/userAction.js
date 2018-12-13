import {userService} from "../services/userService";
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT} from "../constants/userConstants";

const login = (username, password) => {

  const request = (user) => {
    return {type: LOGIN_REQUEST, user}
  };

  const success = (user) => {
    return {type: LOGIN_SUCCESS, user}
  };

  const failure = (error) => {
    return {type: LOGIN_FAILURE, error}
  };

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
};

const logout = () => {
  userService.logout();
  return {type: LOGOUT};
};

export const userActions = {
  login,
  logout,
};