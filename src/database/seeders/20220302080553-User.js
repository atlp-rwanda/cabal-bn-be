const { uuid } = require('uuidv4');
const {hashPassword} = require("../../helpers/user.helpers")

module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      'Users',
      [
        {
          first_name: 'ADMIN',
          last_name: 'ADMIN',
          password: hashPassword('ADMIN2gmail'),
          email: 'ADMIN@gmail.com',
          language: 'English',
          address: 'kigali',
          profile_picture:
            'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg',
          nationality: 'Rwandan',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: 'REQUESTER',
          last_name: 'REQUESTER',
          password: hashPassword('REQUESTER2gmail'),
          email: 'REQUESTER@gmail.com',
          language: 'English',
          address: 'kigali',
          profile_picture:
            'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg',
          nationality: 'Rwandan',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: 'SUPER_ADMIN',
          last_name: 'SUPER_ADMIN',
          password: hashPassword('SUPER_ADMIN2gmail'),
          email: 'SUPER_ADMIN@gmail.com',
          language: 'English',
          address: 'kigali',
          profile_picture:
            'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg',
          nationality: 'Rwandan',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    ),
  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {})
};
