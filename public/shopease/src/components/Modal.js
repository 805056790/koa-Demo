/**
 * Created by yzdd on 2017/10/31.
 */
import React, {Component} from 'react';
import {connect} from "react-redux";

class Modal extends Component {

  render() {
    console.log(this.props,"--渲染的组件-----");
    return (
      <div className="container">
        {this.props.modal}
      </div>
    );
  }
}

export default connect(state => ({
  modal: state.modal
}))(Modal);