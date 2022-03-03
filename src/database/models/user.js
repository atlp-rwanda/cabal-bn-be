<<<<<<< HEAD
/* eslint-disable no-unused-vars */
/* eslint-disable valid-jsdoc */
/* eslint-disable require-jsdoc */

const { Model } = require('sequelize');
const roles = require('../../utils/roles.utils');

=======
'use strict';
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
<<<<<<< HEAD

=======
>>>>>>> 08689d6 (* chore/changed procfile setting)
    toJSON() {
      return { ...this.get(), id: undefined, password: undefined };
    }
  }
<<<<<<< HEAD
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
=======
=======
import roles from '../../utils/roles.utils';
>>>>>>> 4e05ae2 (minor changes)
=======
import roles from '../../utils/roles.utils';
>>>>>>> 97759dc (chore: addedd other user model fields)

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
=======

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
>>>>>>> e08edc4 (chore: rebased dev)
=======

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
>>>>>>> 2dfab96 (feature: add user registration)
=======
import roles from '../../utils/roles.utils';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {

>>>>>>> 886728a (finished rebasing and updating user model)
=======

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
>>>>>>> d0a89b9 (rebase commit)
=======

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
>>>>>>> 53839d8 (chore: rebase commit)
=======

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
>>>>>>> 17a720a (chore: rebased dev)
=======

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
>>>>>>> e08edc4 (chore: rebased dev)
=======

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
>>>>>>> 2dfab96 (feature: add user registration)
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
	User.init(
		{
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4e05ae2 (minor changes)
=======
>>>>>>> 97759dc (chore: addedd other user model fields)
			user_id: {
				allowNull: false,
				primaryKey: true,
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
			},
			first_name: DataTypes.STRING,
			last_name: DataTypes.STRING,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
			username: DataTypes.STRING,
=======
>>>>>>> 886728a (finished rebasing and updating user model)
=======
			username: DataTypes.STRING,
>>>>>>> 4e05ae2 (minor changes)
=======
			username: DataTypes.STRING,
>>>>>>> 97759dc (chore: addedd other user model fields)
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d0a89b9 (rebase commit)
=======
>>>>>>> 4e05ae2 (minor changes)
=======
>>>>>>> 53839d8 (chore: rebase commit)
=======
>>>>>>> 17a720a (chore: rebased dev)
=======
>>>>>>> e08edc4 (chore: rebased dev)
=======
>>>>>>> 2dfab96 (feature: add user registration)
=======
>>>>>>> 97759dc (chore: addedd other user model fields)
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
			language: {
				type: DataTypes.STRING,
				defaultValue: 'English',
			},
=======
			language: DataTypes.STRING,
>>>>>>> 886728a (finished rebasing and updating user model)
			address: DataTypes.STRING,
			profile_picture: {
				type: DataTypes.STRING,
				defaultValue:
					'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg',
			},
<<<<<<< HEAD
			occupation: DataTypes.STRING,
			bio: DataTypes.STRING,
=======
>>>>>>> 886728a (finished rebasing and updating user model)
			nationality: DataTypes.STRING,
			user_role_id: {
				allowNull: true,
				type: DataTypes.UUID,
				defaultValue: roles.REQUESTER,
=======
			password: {
				type: DataTypes.STRING,
				allowNull: false,
>>>>>>> d0a89b9 (rebase commit)
=======
			language: {
				type: DataTypes.STRING,
=======
			language: {
				type: DataTypes.STRING,
>>>>>>> 97759dc (chore: addedd other user model fields)
				defaultValue: 'English',
			},
			address: DataTypes.STRING,
			profile_picture: {
				type: DataTypes.STRING,
				defaultValue:
					'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg',
			},
			occupation: DataTypes.STRING,
			bio: DataTypes.STRING,
			nationality: DataTypes.STRING,
			user_role_id: {
				allowNull: true,
				type: DataTypes.UUID,
				defaultValue: roles.REQUESTER,
<<<<<<< HEAD
>>>>>>> 4e05ae2 (minor changes)
=======
			password: {
				type: DataTypes.STRING,
				allowNull: false,
>>>>>>> 53839d8 (chore: rebase commit)
=======
			password: {
				type: DataTypes.STRING,
				allowNull: false,
>>>>>>> 17a720a (chore: rebased dev)
=======
			password: {
				type: DataTypes.STRING,
				allowNull: false,
>>>>>>> e08edc4 (chore: rebased dev)
=======
			password: {
				type: DataTypes.STRING,
				allowNull: false,
>>>>>>> 2dfab96 (feature: add user registration)
=======
>>>>>>> 97759dc (chore: addedd other user model fields)
			},
		},
		{
			sequelize,
			modelName: 'User',
		}
	);
	return User;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 17a720a (chore: rebased dev)
=======
>>>>>>> e08edc4 (chore: rebased dev)
=======
>>>>>>> 2dfab96 (feature: add user registration)
=======
>>>>>>> 886728a (finished rebasing and updating user model)
=======
>>>>>>> d0a89b9 (rebase commit)
=======
>>>>>>> 53839d8 (chore: rebase commit)
=======
>>>>>>> 17a720a (chore: rebased dev)
=======
>>>>>>> e08edc4 (chore: rebased dev)
=======
>>>>>>> 2dfab96 (feature: add user registration)
};
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
