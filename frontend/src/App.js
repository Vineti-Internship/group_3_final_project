import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {LoginPage} from "./pages/loginPage";
import {HomePage} from "./pages/homePage";
import {PrivateRoute} from "./components/privateRoute";
import {NotFoundPage} from "./pages/notFoundPage";
import {store} from "./helpers/store";

class App extends Component {

  constructor(props) {
    super(props);
    localStorage.setItem('user', JSON.stringify('{"name":"Artur"}'));
    console.log('store ', store.getState());
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage}/>
            <Route path="*" component={NotFoundPage}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
