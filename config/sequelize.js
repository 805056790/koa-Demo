import Sequelize from 'Sequelize';
import dbConfig from './database'

export default new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  pool: dbConfig.pool
});