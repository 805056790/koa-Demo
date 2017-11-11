/**
 * Created by yzdd on 2017/11/4.
 */
import React, {Component} from 'react';
import ChatLine from "./component/ChatLine";
import TextField from 'material-ui/TextField';
import socketClient from '../../socket';
import {connect} from "react-redux";
import {modalShow, MODALSHOW} from "../../action/Action";
import MessModal from "../../components/modal/MessModal";


class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    }
  }

  componentDidMount() {
    socketClient.on("user.login", function ({username}) {
      console.log("------" + username + "登录了聊天室");
    })
  }

  //发送消息
  sendMessage = () => {

  };

  render() {
    return (
      <div>
        <ChatLine message="这是一条消息" name="姓名"/>
        <TextField
          hintText="请输入聊天室要发的消息"
          floatingLabelText="聊天"
          onChange={(e) => this.setState({message: e.target.value})}
        /><br/>
        <button onClick={this.sendMessage}>发送</button>
      </div>
    );
  }
}

export default connect()(Chat);