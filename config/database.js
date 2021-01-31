const mysql = require('mysql');
const config = require('config');
const { Sequelize } = require('sequelize');

module.exports = () => {
  const connectionUri =
    `mysql://${config.get('server.dbUser')}:${config.get('server.dbPassword')}@${config.get('server.dbHost')}:${config.get('server.dbPort')}/${config.get('server.dbDatabase')}`;
  return new Sequelize(connectionUri, { define: { timestamps: false } });
}
