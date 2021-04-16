const { DataTypes } = require('sequelize');
const DbConnection = require('../../config/database')();

const User = DbConnection.define('user', {
  id: {
    field: 'id',
    type: DataTypes.INTEGER,
    allowNull: true,
    primaryKey: true,
  },
  name: {
    field: 'name',
    type: DataTypes.STRING,
    allowNull: false,
  },
  latitude: {
    field: 'latitude',
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  longitude: {
    field: 'longitude',
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  // socialNetworks: {
  //   field: 'social_networks',
  //   type: DataTypes.DATE,
  //   allowNull: false,
  //   defaultValue: new Date(),
  // },
  occupation: {
    field: 'occupation',
    type: DataTypes.STRING,
    allowNull: true,
  },
  bio: {
    field: 'bio',
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = () => User;
