import sequelize from '../config/sequelize';
import Sequelize from 'Sequelize';
import Classify from './Classify';

const Good = sequelize.define('good', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  type: {
    type: Sequelize.INTEGER,

    references: {
      // 引用另一个模型
      model: Classify,

      // 连接模型的列表
      key: 'id',
    }
  },
  name: Sequelize.STRING,
  price: Sequelize.DOUBLE,
  remark: Sequelize.STRING,
  images: Sequelize.STRING
});
export default Good;