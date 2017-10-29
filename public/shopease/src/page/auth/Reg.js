/**
 * Created by yzdd on 2017/10/26.
 */
import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Reg extends Component {
  render() {
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
          <RaisedButton label="注册" style={{marginTop: 12}} onClick={this.setLogin}/>
        </div>
      </div>
    );
  }
}
