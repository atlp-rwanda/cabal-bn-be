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
module.exports = {
  async up(queryInterface, DataTypes) {
=======
module.exports = {
  async up(queryInterface, DataTypes) {
<<<<<<< HEAD
    const roles = require('../../utils/roles.utils');

>>>>>>> 886728a (finished rebasing and updating user model)
=======
>>>>>>> 3d6b4ac (chore: minor changes)
    await queryInterface.createTable('Users', {
      user_id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      username: DataTypes.STRING,
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
      nationality: DataTypes.STRING,
<<<<<<< HEAD
<<<<<<< HEAD
=======
      user_role_id: {
        allowNull: true,
        type: DataTypes.UUID,
        defaultValue: roles.REQUESTER
      },
>>>>>>> 886728a (finished rebasing and updating user model)
=======
>>>>>>> 3d6b4ac (chore: minor changes)
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
<<<<<<< HEAD
<<<<<<< HEAD
  async down(queryInterface) {
    await queryInterface.dropTable('Users');
  }
=======
=======
>>>>>>> e08edc4 (chore: rebased dev)
=======
>>>>>>> 2dfab96 (feature: add user registration)
'use strict';
=======
>>>>>>> 97759dc (chore: addedd other user model fields)
module.exports = {
	async up(queryInterface, DataTypes) {
		const roles = require('../../utils/roles.utils');

=======
'use strict';
module.exports = {
	async up(queryInterface, DataTypes) {
>>>>>>> d0a89b9 (rebase commit)
=======
module.exports = {
	async up(queryInterface, DataTypes) {
		const roles = require('../../utils/roles.utils');

>>>>>>> 4e05ae2 (minor changes)
=======
'use strict';
module.exports = {
	async up(queryInterface, DataTypes) {
>>>>>>> 53839d8 (chore: rebase commit)
=======
'use strict';
module.exports = {
	async up(queryInterface, DataTypes) {
>>>>>>> 17a720a (chore: rebased dev)
=======
'use strict';
module.exports = {
	async up(queryInterface, DataTypes) {
>>>>>>> e08edc4 (chore: rebased dev)
=======
'use strict';
module.exports = {
	async up(queryInterface, DataTypes) {
>>>>>>> 2dfab96 (feature: add user registration)
=======
module.exports = {
	async up(queryInterface, DataTypes) {
		const roles = require('../../utils/roles.utils');

>>>>>>> 97759dc (chore: addedd other user model fields)
		await queryInterface.createTable('Users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
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
			username: DataTypes.STRING,
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
			language: {
				type: DataTypes.STRING,
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
			createdAt: {
				allowNull: false,
				type: DataTypes.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: DataTypes.DATE,
			},
		});
	},
	async down(queryInterface, DataTypes) {
		await queryInterface.dropTable('Users');
	},
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
  async down(queryInterface, DataTypes) {
=======
  async down(queryInterface) {
>>>>>>> 3d6b4ac (chore: minor changes)
    await queryInterface.dropTable('Users');
  }
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
