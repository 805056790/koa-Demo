import React, {Component} from 'react';
import {Provider} from 'react-redux';
import './App.css';
import store from './store/store';
import Counter from './page/Counter'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter/>
      </Provider>
    );
  }
}

export default App;
