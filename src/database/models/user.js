<<<<<<< HEAD
'use strict';
<<<<<<< HEAD
const {
  Model
} = require('sequelize');
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 97759dc (chore: addedd other user model fields)
import roles from '../../utils/roles.utils';

const { Model } = require('sequelize');
=======
const {
  Model
} = require('sequelize');
>>>>>>> 7644ca4 (#181339524-docker-setup-for-cabal-project (#14))
>>>>>>> 08689d6 (* chore/changed procfile setting)
=======
/* eslint-disable no-unused-vars */
/* eslint-disable valid-jsdoc */
/* eslint-disable require-jsdoc */

const { Model } = require('sequelize');
const roles = require('../../utils/roles.utils');

>>>>>>> 2b00a07 (major changes)
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    toJSON() {
      return { ...this.get(), id: undefined, password: undefined };
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
=======
<<<<<<< HEAD
=======
>>>>>>> 2b00a07 (major changes)
  User.init(
    {
      user_id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
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
      language: DataTypes.STRING,
      address: DataTypes.STRING,
      profile_picture: {
        type: DataTypes.STRING,
        defaultValue:
          'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg'
      },
      nationality: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'User'
    }
  );
  return User;
};
<<<<<<< HEAD
=======
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
>>>>>>> 7644ca4 (#181339524-docker-setup-for-cabal-project (#14))
>>>>>>> 08689d6 (* chore/changed procfile setting)
=======
>>>>>>> 2b00a07 (major changes)
