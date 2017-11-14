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
import Modal from "./components/Modal";
import Chat from "./page/chat/Chat";
import io from 'socket.io-client';
import socketClient from './socket';

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
              <Route path='/chat' exact component={Chat}/>
            </Switch>
          </div>
        </Router>
        <Modal ref={(modal) => this.modal = modal}/>
      </div>
    );
  }
}


export default App;
