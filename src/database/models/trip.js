/* eslint-disable valid-jsdoc */
/* eslint-disable require-jsdoc */

const { Model } = require('sequelize');
const tripStatus = require('../../utils/trip.util');

module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      this.belongsTo(User, {
        foreignKey: 'user_id',
        as: 'user'
      });
      this.belongsTo(User, {
        foreignKey: 'manager_id',
        as: 'manager'
      });
    }
  }
  Trip.init(
    {
      origin: DataTypes.STRING,
      destination: DataTypes.STRING,
      tripDate: DataTypes.DATE,
      returnDate: DataTypes.DATE,
      reason: DataTypes.STRING,
      status: {
        type: DataTypes.ENUM,
        values: tripStatus,
        defaultValue: 'PENDING'
      }
    },
    {
      sequelize,
      modelName: 'Trip'
    }
  );

  return Trip;
};
