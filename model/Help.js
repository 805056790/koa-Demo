import sequelize from '../config/sequelize';
import Sequelize from 'Sequelize';

const Help = sequelize.define("help", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: Sequelize.STRING,
  content: Sequelize.STRING
});

export default Help;