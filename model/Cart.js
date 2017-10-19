import sequelize from '../config/sequelize';
import Sequelize from 'Sequelize';
import User from "./User";
import Good from "./Good";

const Cart = sequelize.define('cart', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  good: {
    type: Sequelize.INTEGER,
    references: {
      model: Good,
      key: 'id'
    }
  },
  amount: Sequelize.INTEGER,
  user: {
    type: Sequelize.INTEGER,

    references: {
      // 引用另一个模型
      model: User,

      // 连接模型的列表
      key: 'id',
    }
  }
});