import sequelize from '../config/sequelize';
import Sequelize from 'Sequelize';

const user = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  avatar: Sequelize.STRING,
  tel: Sequelize.INTEGER,
  email: Sequelize.STRING,
  nickname: Sequelize.STRING,
  gender: Sequelize.STRING,
  birthday: Sequelize.DATE,
  loginAttempts: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  lockUntil: Sequelize.INTEGER,
  // Timestamps
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

export default user;