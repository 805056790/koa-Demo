/**
 * Created by yzdd on 2017/10/29.
 */
import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import {connect} from "react-redux";
import history from '../history/history';

class Header extends Component {
  handleTouchTap = () => {
    const {userData, history} = this.props;

  };
  //注销
  Logout = () => {

  };
  //去注册页面
  toReg = () => {
    history.push("/reg");
  };

  render() {
    const {userData} = this.props;
    return (
      <div style={styles.header}>
        <AppBar
          title={
            <span style={styles.title}>{userData.data.length !== 0 ? userData.data.username : "请登录"}</span>
          }
          onTitleTouchTap={this.handleTouchTap}
          iconElementLeft={
            <FontIcon
              className="muidocs-icon-action-home"
              style={styles.icon}
            />
          }
          iconElementRight={
            userData.data.length !== 0 ?
              <FlatButton label="注销" onClick={this.Logout}/>
              :
              <FlatButton label="注册" onClick={this.toReg}/>
          }
        />
      </div>
    );
  }
}

const styles = {
  header: {
    height: 44,
    backgroundColor: ""
  },
  icon: {
    marginRight: 24,
  }
};

function selectUserData(state) {
  return {
    userData: state.login
  }
}

export default connect(selectUserData)(Header);
