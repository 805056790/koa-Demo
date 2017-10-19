import sequelize from '../config/sequelize';
import Sequelize from 'Sequelize';

const Help = sequelize.define("help", {
  id: {
    primaryKey: true,
    type: Sequelize.STRING,
    autoIncrement: true
  },
  title: Sequelize.STRING,
  content: Sequelize.STRING
});

export default Help;