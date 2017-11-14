/**
 * Created by yzdd on 2017/11/14.
 */
import React, {Component} from 'react';
import {connect} from "react-redux";

class ChatList extends Component {
  render() {
    const {chatList} = this.props;
    console.log(chatList);
    return (
      <div>
        {
          chatList.map((v, i) =>
            <div>
              <p>{v.name}:{v.message}</p>
            </div>
          )
        }
      </div>
    );
  }
}

function selectState(state) {
  return {
    chatList: state.chat.chatList
  }
}

export default connect(selectState)(ChatList);