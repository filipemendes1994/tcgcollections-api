const { DataTypes } = require('sequelize');
const DbConnection = require('../../config/database')();

const Collection = DbConnection.define('collection', {
  id: {
    field: 'id',
    type: DataTypes.INTEGER,
    allowNull: true,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
  },
  latitude: {
    type: DataTypes.DOUBLE,
  },
  longitude: {
    type: DataTypes.DOUBLE,
  },
  upvotes: {
    type: DataTypes.INTEGER,
  },
  snapshotDate: {
    field: 'snapshot_date',
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date(),
  },
  openForOffers: {
    field: 'open_for_offers',
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  userId: {
    field: 'user_id',
    type: DataTypes.INTEGER,
    foreignKey: true,
  },
});

module.exports = () => Collection;
