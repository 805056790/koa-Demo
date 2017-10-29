import sequelize from '../config/sequelize';
import Sequelize from 'Sequelize';

const ChatUser = sequelize.define("ChatUser", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: Sequelize.STRING,
  password: Sequelize.STRING
});