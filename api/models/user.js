const { DataTypes } = require('sequelize');
const DbConnection = require('../../config/database')();

const User = DbConnection.define('user', {
  id: {
    field: 'id',
    type: DataTypes.INTEGER,
    allowNull: true,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
  },
  profilePicture: {
    field: 'profile_picture',
    type: DataTypes.TEXT,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
  },
  name: {
    type: DataTypes.STRING,
  },
  // socialNetworks: {
  //   field: 'social_networks',
  //   type: DataTypes.DATE,
  //   allowNull: false,
  //   defaultValue: new Date(),
  // },
  occupation: {
    type: DataTypes.STRING,
  },
  bio: {
    type: DataTypes.STRING,
  },
});

module.exports = () => User;
