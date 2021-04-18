const { DataTypes } = require('sequelize');
const DbConnection = require('../../config/database')();

const Badge = DbConnection.define('badge', {
  id: {
    field: 'id',
    type: DataTypes.INTEGER,
    allowNull: true,
    primaryKey: true,
    autoIncrement: true,
  },
  color: {
    type: DataTypes.STRING,
  },
  name: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  transactionId: {
    field: 'transaction_id',
    type: DataTypes.STRING,
    allowNull: false,
  },
  collectionId: {
    field: 'collection_id',
    type: DataTypes.INTEGER,
    foreignKey: true,
  },
});

module.exports = () => Badge;
