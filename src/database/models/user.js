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
    static associate({ Role, Trip, User: USER }) {
      // define association here
      this.belongsTo(Role, { foreignKey: 'role_id' });
      this.hasMany(Trip, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        hooks: true
      });
      this.hasMany(Trip, { foreignKey: 'manager_id' });
      this.belongsTo(USER, { foreignKey: 'manager_id' });
      this.hasMany(USER, { foreignKey: 'manager_id' });
    }

    toJSON() {
      return { ...this.get(), id: undefined, password: undefined };
    }
  }
  User.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      password: {
        type: DataTypes.STRING,
        allowNull: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      address: DataTypes.STRING,
      manager_id: {
        type: DataTypes.INTEGER,
        default: null,
        references: {
          model: 'Users',
          key: 'id',
          as: 'manager_id'
        }
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      profile_picture: {
        type: DataTypes.TEXT,
        defaultValue:
          'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg'
      },
      provider: {
        type: DataTypes.ENUM,
        values: ['GOOGLE', 'FACEBOOK', 'EMAIL'],
        defaultValue: 'EMAIL'
      }
    },
    {
      sequelize,
      modelName: 'User'
    }
  );
  return User;
};
