import sequelize from '../config/sequelize';
import Sequelize from 'Sequelize';

const Banner = sequelize.define("banner", {
  title: Sequelize.STRING,
  remark: Sequelize.STRING,
  sort: Sequelize.INTEGER,
  is_show: Sequelize.BOOLEAN,
  images: Sequelize.STRING
});