import React, {Component} from 'react';
import {Provider} from 'react-redux';
import './App.css';
import store from './store/store';
import Counter from './page/Counter'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import User from "./page/User";
import Login from "./page/auth/Login";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/' exact component={Login}/>
        </div>
      </Router>
    );
  }
}


export default App;
