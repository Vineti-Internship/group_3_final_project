import React from 'react';
import connect from "react-redux/es/connect/connect";
import { Link } from 'react-router-dom';

class HomePage extends React.Component{
  render() {
    return (
      <div>
        <h1>HomePage</h1>
        <Link to="/login">LogOut</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };