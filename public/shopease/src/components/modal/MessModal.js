/**
 * Created by yzdd on 2017/11/4.
 */
import React, {Component} from 'react';

export default class MessModal extends Component {
  render() {
    const {title} = this.props;
    console.log(title, "显示的title");
    return (
      <div style={styles.container}>
        <p>{title}</p>
      </div>
    );
  }
}
const styles = {
  container: {
    width: 300,
    height: 300,
    borderWidth: 1,
    borderColor: 'red'
  }
};