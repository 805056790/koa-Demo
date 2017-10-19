import sequelize from '../config/sequelize';
import Sequelize from 'Sequelize';

const Classify = sequelize.define("Classify",{
  id:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name:Sequelize.STRING,
  remark:Sequelize.STRING,
});
export default Classify;