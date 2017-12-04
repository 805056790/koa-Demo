/**
 * Created by yzdd on 2017/11/4.
 */
import React, {Component} from 'react';
import ChatLine from "./component/ChatLine";
import TextField from 'material-ui/TextField';
import socketClient from '../../socket';
import {connect} from "react-redux";
import {modalShow, MODALSHOW, sendSuccess} from "../../action/Action";
import MessModal from "../../components/modal/MessModal";
import UserOnList from "./UserOnList";
import ChatList from "./ChatList";


class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    }
  }

  //发送消息
  sendMessage = () => {
    console.log("----点击了发送消息的按钮-----");
    const {dispatch} = this.props;
    //向云端广播发送的消息
    socketClient.emit("sendMessage", {mess: this.state.message});
    //向本地存储发送的消息
    dispatch(sendSuccess({message: this.state.message, name: "编的名字"}));
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
        <ChatList/>
        <br/>
        <UserOnList/>
      </div>
    );
  }
}

export default connect()(Chat);