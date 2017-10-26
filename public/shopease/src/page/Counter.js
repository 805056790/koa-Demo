/**
 * Created by yzdd on 2017/10/22.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add, addAsync, dec} from "../action/Action";
import io from 'socket.io-client';
class Counter extends Component {
  componentWillMount(){
    var socket = io.connect('http://localhost:5050');
    socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });
  }
  render() {
    const {onIncrement, onDecrement, value, onIncrementSync} = this.props;
    return (
      <div>
        <button onClick={onIncrementSync}>
          Increment_ASYNC
        </button>
        <button onClick={onIncrement}>
          Increment
        </button>
        {' '}
        <button onClick={onDecrement}>
          Decrement
        </button>
        <hr/>
        <div>
          Clicked: {value} times
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(add()),
    onDecrement: () => dispatch(dec()),
    onIncrementSync: () => dispatch(addAsync())
  }
}

function mapStateToProps(state) {
  return {
    value: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);