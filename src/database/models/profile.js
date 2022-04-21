'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      this.belongsTo(User, {
        foreignKey: "user_id",
        as: "user"
      })
    }
  }
  Profile.init({
    age: {
      type: DataTypes.INTEGER
    },
    gender: {
      type: DataTypes.STRING
    },
    occupation: {
      type: DataTypes.STRING
    },
    language: {
      type: DataTypes.STRING
    },
    nationality: {
      type: DataTypes.STRING
    },
    bio: {
      type: DataTypes.STRING
    },
    date_of_birth: {
      type: DataTypes.DATE
    },
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};