const { DataTypes } = require('sequelize');
const DbConnection = require('../../config/database')();

const Collection = DbConnection.define('collection', {
  id: {
    field: 'id',
    type: DataTypes.INTEGER,
    allowNull: true,
    primaryKey: true,
  },
  shortDescription: {
    field: 'short_description',
    type: DataTypes.STRING,
    allowNull: false,
  },
  longDescription: {
    field: 'long_description',
    type: DataTypes.STRING,
    allowNull: false,
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
  ownerId: {
    field: 'owner_id',
    type: DataTypes.INTEGER,
    foreignKey: true,
  },
});

module.exports = () => Collection;
