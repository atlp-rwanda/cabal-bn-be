'use strict';
const { Model } = require('sequelize');
const { bookingStatus } = require('../../utils/booking.utils');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Room, Accommodation }) {
      this.belongsTo(User, {
        foreignKey: 'user_id',
        as: 'user'
      });
      this.belongsTo(Room, { foreignKey: 'room_id', as: 'Rooms' });
    }
  }
  Booking.init(
    {
      checkinDate: DataTypes.DATE,
      checkoutDate: DataTypes.DATE,
      status: {
        type: DataTypes.ENUM,
        values: bookingStatus,
        defaultValue: 'PENDING'
      }
    },
    {
      sequelize,
      modelName: 'Booking'
    }
  );
  return Booking;
};
