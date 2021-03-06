import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LoginPage from "./pages/loginPage";
import HomePage from "./pages/homePage";
import PrivateRoute from "./components/privateRoute";
import NotFoundPage from "./pages/notFoundPage";
import Header from "./components/header";
import connect from "react-redux/es/connect/connect";
import {close} from "./actions/popupAction";
import Popup from "./components/popups/popup";

class App extends Component {

  // constructor(props) {
  //   super(props);
  //   //add test user in LocalStorage, to see the HomePage......................
  //   // localStorage.setItem('user', JSON.stringify('{"name":"Artur"}'));
  // }

  //callBack function used to close popup..................
  closePopup = () => {
    this.props.dispatch(close());
  };

  render() {
    const {isOpened, popupType, data} = this.props;

    return (
      <div className="App">
        <Header/>
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact path="/" component={HomePage}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route path="*" component={NotFoundPage}/>
          </Switch>
        </BrowserRouter>

        {/*use one popup container to show all popups in it...........*/}
        <Popup open={isOpened} close={this.closePopup} type={popupType} additionalData={data}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {isOpened, popupType, data} = state.popup;
  return {
    isOpened,
    popupType,
    data
  };
};

export default connect(mapStateToProps)(App);
