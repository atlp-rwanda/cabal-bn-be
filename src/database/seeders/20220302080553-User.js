const { uuid } = require('uuidv4');

module.exports = {
  up: (queryInterface) =>
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
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    ),
  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {})
};
