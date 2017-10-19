import sequelize from '../config/sequelize';
import Sequelize from 'Sequelize';
import User from "./User";

const Address = sequelize.define("address", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user: {
    type: Sequelize.INTEGER,

    references: {
      // 引用另一个模型
      model: User,

      // 连接模型的列表
      key: 'id',
    }
  },
  gender: Sequelize.STRING,
  tel: Sequelize.STRING,
  address: Sequelize.STRING,
  id_def: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});
export default Address