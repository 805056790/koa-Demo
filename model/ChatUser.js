import sequelize from '../config/sequelize';
import Sequelize from 'Sequelize';

const ChatUser = sequelize.define("chatuser", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: Sequelize.STRING,
  password: Sequelize.STRING
});
export default ChatUser;