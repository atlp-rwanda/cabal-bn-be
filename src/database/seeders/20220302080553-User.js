<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const { uuid } = require('uuidv4');
<<<<<<< HEAD
const roles = require('../../utils/roles.utils');
=======
const roles = require('../../utils/roles.utils.js');
const { uuid } = require('uuidv4');
>>>>>>> 97759dc (chore: addedd other user model fields)
=======
const roles = require('../../utils/roles.utils.js');
const { uuid } = require('uuidv4');
>>>>>>> 4e05ae2 (minor changes)
=======
const roles = require('../../utils/roles.utils.js');
const { uuid } = require('uuidv4');
>>>>>>> 97759dc (chore: addedd other user model fields)

module.exports = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  up: (queryInterface, DataTypes) =>
=======

module.exports = {
  up: (queryInterface) =>
>>>>>>> 3d6b4ac (chore: minor changes)
=======
const { uuid } = require('uuidv4');

module.exports = {
<<<<<<< HEAD
  up: (queryInterface, DataTypes) =>
>>>>>>> 886728a (finished rebasing and updating user model)
=======
  up: (queryInterface) =>
>>>>>>> 3d6b4ac (chore: minor changes)
    queryInterface.bulkInsert(
      'Users',
      [
        {
          user_id: uuid(),
          first_name: 'ADMIN',
          last_name: 'ADMIN',
          password: 'ADMIN@gmail',
          email: 'ADMIN@gmail.com',
          language: 'English',
          address: 'kigali',
          profile_picture:
            'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg',
          nationality: 'Rwandan',
<<<<<<< HEAD
<<<<<<< HEAD
=======
          user_role_id: roles.ADMIN,
>>>>>>> 886728a (finished rebasing and updating user model)
=======
>>>>>>> 3d6b4ac (chore: minor changes)
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: uuid(),
          first_name: 'REQUESTER',
          last_name: 'REQUESTER',
          password: 'REQUESTER@gmail',
          email: 'REQUESTER@gmail.com',
          language: 'English',
          address: 'kigali',
          profile_picture:
            'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg',
          nationality: 'Rwandan',
<<<<<<< HEAD
<<<<<<< HEAD
=======
          user_role_id: roles.REQUESTER,
>>>>>>> 886728a (finished rebasing and updating user model)
=======
>>>>>>> 3d6b4ac (chore: minor changes)
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: uuid(),
          first_name: 'SUPER_ADMIN',
          last_name: 'SUPER_ADMIN',
          password: 'SUPER_ADMIN@gmail',
          email: 'SUPER_ADMIN@gmail.com',
          language: 'English',
          address: 'kigali',
          profile_picture:
            'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg',
          nationality: 'Rwandan',
<<<<<<< HEAD
<<<<<<< HEAD
=======
          user_role_id: roles.SUPER_ADMIN,
>>>>>>> 886728a (finished rebasing and updating user model)
=======
>>>>>>> 3d6b4ac (chore: minor changes)
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    ),
<<<<<<< HEAD
<<<<<<< HEAD
  down: (queryInterface) =>
    queryInterface.bulkDelete('Users', null, {})
=======
=======
>>>>>>> e08edc4 (chore: rebased dev)
=======
>>>>>>> 2dfab96 (feature: add user registration)
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
	up: (queryInterface, Sequelize) =>
		queryInterface.bulkInsert(
			'Users',
			[
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
					user_id: uuid(),
					first_name: 'ADMIN',
					last_name: 'ADMIN',
					username: 'ADMIN',
					password: 'ADMIN@gmail',
					email: 'ADMIN@gmail.com',
					language: 'English',
					address: 'kigali',
					profile_picture:
						'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg',
					occupation: 'worker',
					bio: 'haha',
					nationality: 'Rwandan',
					user_role_id: roles.ADMIN,
<<<<<<< HEAD
<<<<<<< HEAD
=======
					email: 'alain@example.com',
					password: 'Alain@example1234',
>>>>>>> d0a89b9 (rebase commit)
=======
>>>>>>> 4e05ae2 (minor changes)
=======
					email: 'alain@example.com',
					password: 'Alain@example1234',
>>>>>>> 53839d8 (chore: rebase commit)
=======
					email: 'alain@example.com',
					password: 'Alain@example1234',
>>>>>>> 17a720a (chore: rebased dev)
=======
					email: 'alain@example.com',
					password: 'Alain@example1234',
>>>>>>> e08edc4 (chore: rebased dev)
=======
					email: 'alain@example.com',
					password: 'Alain@example1234',
>>>>>>> 2dfab96 (feature: add user registration)
=======
>>>>>>> 97759dc (chore: addedd other user model fields)
					createdAt: new Date(),
					updatedAt: new Date(),
				},
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
					user_id: uuid(),
					first_name: 'REQUESTER',
					last_name: 'REQUESTER',
					username: 'REQUESTER',
					password: 'REQUESTER@gmail',
					email: 'REQUESTER@gmail.com',
					language: 'English',
					address: 'kigali',
					profile_picture:
						'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg',
					occupation: 'worker',
					bio: 'haha',
					nationality: 'Rwandan',
					user_role_id: roles.REQUESTER,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					user_id: uuid(),
					first_name: 'SUPER_ADMIN',
					last_name: 'SUPER_ADMIN',
					username: 'SUPER_ADMIN',
					password: 'SUPER_ADMIN@gmail',
					email: 'SUPER_ADMIN@gmail.com',
					language: 'English',
					address: 'kigali',
					profile_picture:
						'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg',
					occupation: 'worker',
					bio: 'haha',
					nationality: 'Rwandan',
					user_role_id: roles.SUPER_ADMIN,
<<<<<<< HEAD
<<<<<<< HEAD
=======
					email: 'eli@example.com',
					password: 'eli@example234',
>>>>>>> d0a89b9 (rebase commit)
=======
>>>>>>> 4e05ae2 (minor changes)
=======
					email: 'eli@example.com',
					password: 'eli@example234',
>>>>>>> 53839d8 (chore: rebase commit)
=======
					email: 'eli@example.com',
					password: 'eli@example234',
>>>>>>> 17a720a (chore: rebased dev)
=======
					email: 'eli@example.com',
					password: 'eli@example234',
>>>>>>> e08edc4 (chore: rebased dev)
=======
					email: 'eli@example.com',
					password: 'eli@example234',
>>>>>>> 2dfab96 (feature: add user registration)
=======
>>>>>>> 97759dc (chore: addedd other user model fields)
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
	down: (queryInterface, Sequelize) =>
		queryInterface.bulkDelete('Users', null, {}),
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 17a720a (chore: rebased dev)
=======
>>>>>>> e08edc4 (chore: rebased dev)
=======
>>>>>>> 2dfab96 (feature: add user registration)
=======
  down: (queryInterface, DataTypes) =>
=======
  down: (queryInterface) =>
>>>>>>> 3d6b4ac (chore: minor changes)
    queryInterface.bulkDelete('Users', null, {})
>>>>>>> 886728a (finished rebasing and updating user model)
=======

=======
>>>>>>> 4e05ae2 (minor changes)
	down: (queryInterface, Sequelize) =>
		queryInterface.bulkDelete('Users', null, {}),
>>>>>>> d0a89b9 (rebase commit)
=======

=======
>>>>>>> 97759dc (chore: addedd other user model fields)
	down: (queryInterface, Sequelize) =>
		queryInterface.bulkDelete('Users', null, {}),
>>>>>>> 53839d8 (chore: rebase commit)
=======

	down: (queryInterface, Sequelize) =>
		queryInterface.bulkDelete('Users', null, {}),
>>>>>>> 17a720a (chore: rebased dev)
=======

	down: (queryInterface, Sequelize) =>
		queryInterface.bulkDelete('Users', null, {}),
>>>>>>> e08edc4 (chore: rebased dev)
=======

	down: (queryInterface, Sequelize) =>
		queryInterface.bulkDelete('Users', null, {}),
>>>>>>> 2dfab96 (feature: add user registration)
};
