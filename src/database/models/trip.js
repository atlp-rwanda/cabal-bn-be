/* eslint-disable valid-jsdoc */
/* eslint-disable require-jsdoc */
'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Trip.init(
    {
      managerId: DataTypes.INTEGER,
      originCity: DataTypes.STRING,
      destination: DataTypes.STRING,
      reason: DataTypes.STRING,
      status: {
        type: DataTypes.STRING,
        defaultValue: 'pending'
      }
    },
    {
      sequelize,
      modelName: 'Trip'
    }
  );

  return Trip;
};
