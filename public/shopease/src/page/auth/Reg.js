/**
 * Created by yzdd on 2017/10/26.
 */
import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {reg} from "../../logics/auth";
import Loading from "../../components/Loading";
import {connect} from "react-redux";
import {regStart} from "../../action/Action";

class Reg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }

  //注册函数
  setReg = async () => {
    const {dispatch} = this.props;
    dispatch(regStart({username: this.state.username, password: this.state.password}));
  };

  render() {
    const {visibleLoading} = this.props;
    console.log(visibleLoading);
    return (
      <div className="container">
        <Loading visible={visibleLoading}/>

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
          <RaisedButton label="注册" style={{marginTop: 12}} onClick={this.setReg}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    visibleLoading: state.reg.isLoading
  }
}

export default connect(mapStateToProps)(Reg)
