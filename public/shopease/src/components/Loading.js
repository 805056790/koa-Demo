/**
 * Created by yzdd on 2017/10/31.
 */
import React, {Component} from 'react';
import './loading.css'
export default class Loading extends Component {
  render() {
    const {visible} = this.props;
    return (
      <div className="spinner" style={visible ? {display: "block"} : {display: 'none'}}>
        <div className="rect1"/>
        <div className="rect2"/>
        <div className="rect3"/>
        <div className="rect4"/>
        <div className="rect5"/>
      </div>
    );
  }
}