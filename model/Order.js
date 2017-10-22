import sequelize from '../config/sequelize';
import Sequelize from 'Sequelize';
import User from "./User";

const Order = sequelize.define('order', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  orderId:Sequelize.STRING,
  totalAmount: Sequelize.DOUBLE,
  payAmount: Sequelize.DOUBLE,
  payTime: Sequelize.DATE,
  status: {
    type: Sequelize.STRING,
    defaultValue: 'submitted'
  },
  recipientName: Sequelize.STRING,
  recipientGender: Sequelize.STRING,
  recipientTel: Sequelize.STRING,
  recipientAddress: Sequelize.STRING,
  items: Sequelize.STRING,
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
export default Order;