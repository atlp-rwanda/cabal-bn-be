/* eslint-disable no-unused-vars */
/* eslint-disable valid-jsdoc */
/* eslint-disable require-jsdoc */

const { Model } = require('sequelize');
const roles = require('../../utils/roles.utils');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Role}) {
      // define association here
      this.belongsTo(Role, { foreignKey: 'role_id' });
    }
  }
  User.init(
    {
      first_name:{ 
        type: DataTypes.STRING,
        // allowNull: false
      },
      last_name: DataTypes.STRING,
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      address: DataTypes.STRING,
      profile_picture: {
        type: DataTypes.STRING,
        defaultValue:
          'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg'
      },
    },
    {
      sequelize,
      modelName: 'User'
    }
  );
  return User;
};
