const { DataTypes } = require('sequelize');
const DbConnection = require('../../config/database')();

const Item = DbConnection.define('item', {
  id: {
    field: 'id',
    type: DataTypes.INTEGER,
    allowNull: true,
    primaryKey: true,
  },
  collectionId: {
    field: 'collection_id',
    type: DataTypes.INTEGER,
    foreignKey: true,
  },
  approximatedValue: {
    field: 'aproximated_value',
    type: DataTypes.DOUBLE,
  },
  name: {
    type: DataTypes.STRING,
  },
  isGraded: {
    field: 'is_graded',
    type: DataTypes.BOOLEAN,
  },
  isPrinciple: {
    field: 'is_principle',
    type: DataTypes.BOOLEAN,
  },
  photo: {
    type: DataTypes.TEXT,
  },
});

module.exports = () => Item;
