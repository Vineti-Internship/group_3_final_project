import React from 'react';
import {Route, Redirect} from 'react-router-dom';

//check if there is a user in localStorage its redirect to LoginPage, else render HomePage...........
const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => (
    localStorage.getItem('user')
      ? <Component {...props} />
      : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
  )}/>
);

export default PrivateRoute;