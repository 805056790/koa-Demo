/**
 * Created by yzdd on 2017/11/11.
 */
import React, {Component} from 'react';
import {connect} from "react-redux";

class UserOnList extends Component {
  render() {
    const {userOn} = this.props;
    console.log(userOn, "------1--2--3--4----");
    userOn.map((v, i) => {
        console.log(v)
      }
    )
    return (
      <div style={styles.container}>
        {
          userOn.map((v, i) =>
            <div>{v.username}</div>
          )
        }
      </div>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center'
  }
};

function selectUser(state) {
  console.log(state)
  return {
    userOn: state.user
  }
}

export default connect(selectUser)(UserOnList);
