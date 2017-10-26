/**
 * Created by yzdd on 2017/10/26.
 */
import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import './Login.css';
import RaisedButton from 'material-ui/RaisedButton';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }

  setLogin = ()=> {
    console.log("-------")
  }

  render() {
    return (
      <div className="container">
        <TextField
          hintText="请输入账号"
          floatingLabelText="账号"
          onChange={(text) => this.setState({username: text})}
        />
        <TextField
          hintText="请输入密码"
          floatingLabelText="密码"
          type="password"
          onChange={(text) => this.setState({password: text})}
        />
        <RaisedButton label="Default" style={{marginTop: 12}} onClick={this.setLogin}/>
      </div>
    );
  }
}