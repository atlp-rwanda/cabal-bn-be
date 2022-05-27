/* eslint-disable valid-jsdoc */
/* eslint-disable require-jsdoc */
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  notification.init(
    {
      details: {
        type: DataTypes.STRING
      },
      type: DataTypes.STRING,
      from_user_id: {
        type: DataTypes.INTEGER
      },
      to_user_id: {
        type: DataTypes.INTEGER
      },
      isRead: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      sequelize,
      modelName: 'notification'
    }
  );
  return notification;
};
