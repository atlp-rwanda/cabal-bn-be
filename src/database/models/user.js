/* eslint-disable no-unused-vars */
/* eslint-disable valid-jsdoc */
/* eslint-disable require-jsdoc */

const { Model } = require('sequelize');
const roles = require('../../utils/roles.utils');
const trip = require('./trip');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
<<<<<<< HEAD
    static associate({ Role, Trip, User: USER }) {
      // define association here
      this.belongsTo(Role, { foreignKey: 'role_id' });
      this.hasMany(Trip, { foreignKey: 'userId' });
=======
    static associate({Role,Trip,User :USER}) {
      // define association here
      this.belongsTo(Role, { foreignKey: 'role_id' });
      this.hasMany(Trip,{foreignKey:"userId"})
>>>>>>> 3088589d9b5786604e2096ab525dc64603b335e7
      USER.belongsTo(USER, {
        foreignKey: 'managerId',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      });
      USER.hasMany(USER, {
        foreignKey: 'managerId'
      });
    }
  }
  User.init(
    {
      first_name: DataTypes.STRING,
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
      address: DataTypes.STRING,
      profile_picture: {
        type: DataTypes.STRING,
        defaultValue:
          'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg'
      }
    },
    {
      sequelize,
      modelName: 'User'
    }
  );
  return User;
};
