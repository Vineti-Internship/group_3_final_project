import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {LoginPage} from "./pages/loginPage";
import {HomePage} from "./pages/homePage";
import {PrivateRoute} from "./components/privateRoute";
import {NotFoundPage} from "./pages/notFoundPage";
import {store} from "./helpers/store";
import Header from "./components/header";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
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
