const { DataTypes } = require('sequelize');
const DbConnection = require('../../config/database')();

module.exports = () =>
  DbConnection.define('collection', {
    // Model attributes are defined here
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
  });
