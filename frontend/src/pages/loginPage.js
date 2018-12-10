import React from 'react';
import {connect} from "react-redux";
import {userActions} from "../ations/userAction";

class LoginPage extends React.Component {

  constructor(props) {
    super(props);

    // reset login status
    this.props.dispatch(userActions.logout());

    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      console.log('username :', username);
      console.log('password :', password);

      // dispatch(userActions.login(username, password));
    }
  };

  render(){
    const { username, password } = this.state;
    return(
      <div>
        <h2>Login</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <div>
            <label>Username</label>
            <input type="text" name="username" value={username} onChange={this.handleChange} />
          </div>

          <div>
            <label>Password</label>
            <input type="password" name="password" value={password} onChange={this.handleChange} />
          </div>

          <div>
            <button onClick={this.handleSubmit}>Login</button>
          </div>
        </form>
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

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage };