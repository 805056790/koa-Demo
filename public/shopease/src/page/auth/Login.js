/**
 * Created by yzdd on 2017/10/26.
 */
import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import './Login.css';
import RaisedButton from 'material-ui/RaisedButton';
import {post} from '../../logics/rpc';
import {connect} from "react-redux";
import {LOGINSTART, loginStart} from "../../action/Action";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }

  setLogin = async (e) => {
    const {userData} = this.props;
    this.props.dispatch(
      loginStart(
        {
          username: this.state.username,
          password: this.state.password
        }
      )
    );

  };

  toReg = () => {
    console.log(this.props.history);
    this.props.history.push("/reg")
  };

  render() {
    const {userData} = this.props;
    return (
      <div className="container">
        <div className="inputView">
          <TextField
            hintText="请输入账号"
            floatingLabelText="账号"
            onChange={(e) => this.setState({username: e.target.value})}
          />
          <TextField
            hintText="请输入密码"
            floatingLabelText="密码"
            type="password"
            onChange={(e) => this.setState({password: e.target.value})}
          />
        </div>
        <div className="btnView">
          <RaisedButton label="登录" style={{marginTop: 12}} onClick={this.setLogin}/>
        </div>
        {
          !userData.isLogin ?
            <p>你还没有登录</p> :
            <p>账号密码{userData.data.username}:{userData.data.password}</p>
        }
      </div>
    );
  }
}

function selectUserData(state) {
  return {
    userData: state.login,
  }
}

export default connect(selectUserData)(Login);