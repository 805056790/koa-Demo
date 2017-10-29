import React, {Component} from 'react';
import {Provider} from 'react-redux';
import './App.css';
import store from './store/store';
import {
  Router,
  Route,
  Link,
  Switch, HashRouter,

} from 'react-router-dom'
import Login from "./page/auth/Login";
import Reg from "./page/auth/Reg";
import Header from "./components/Header";
import history from './history/history'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Router history={history}>
          <div>
            <Switch>
              <Route path='/' exact component={Login}/>
              <Route path='/reg' exact component={Reg}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}


export default App;
