const { hashPassword } = require('../../helpers/user.helpers');

module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      'Users',
      [
        {
          first_name: 'SUPER_ADMIN',
          last_name: 'SUPER_ADMIN',
          password: hashPassword('SUPER_ADMIN2gmail'),
          email: 'SUPER_ADMIN@gmail.com',
          isVerified: true,
          address: 'kigali',
          profile_picture:
            'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg',
          provider: 'EMAIL',
          role_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: 'TRAVEL_ADMIN',
          last_name: 'TRAVEL_ADMIN',
          password: hashPassword('TRAVEL_ADMIN2gmail'),
          email: 'TRAVEL_ADMIN@gmail.com',
          isVerified: true,
          address: 'kigali',
          profile_picture:
            'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg',
          provider: 'EMAIL',
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: 'MANAGER',
          last_name: 'MANAGER',
          password: hashPassword('MANAGER2gmail'),
          email: 'MANAGER@gmail.com',
          isVerified: true,
          address: 'kigali',
          profile_picture:
            'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg',
          provider: 'EMAIL',
          role_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: 'REQUESTER',
          last_name: 'REQUESTER',
          password: hashPassword('REQUESTER2gmail'),
          email: 'REQUESTER@gmail.com',
          isVerified: true,
          address: 'kigali',
          profile_picture:
            'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg',
          provider: 'EMAIL',
          role_id: 4,
          manager_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: 'MANAGER1',
          last_name: 'MANAGER1',
          password: hashPassword('MANAGER2gmail'),
          email: 'MANAGER1@gmail.com',
          address: 'kigali',
          profile_picture:
            'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg',
          provider: 'EMAIL',
          role_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: 'REQUESTER1',
          last_name: 'REQUESTER1',
          password: hashPassword('REQUESTER2gmail'),
          email: 'REQUESTER1@gmail.com',
          address: 'kigali',
          profile_picture:
            'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg',
          provider: 'EMAIL',
          role_id: 4,
          manager_id: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: 'TESTER',
          last_name: 'TESTER',
          password: hashPassword('TESTER1cabal'),
          email: 'TESTER@gmail.com',
          address: 'kigali',
          isVerified: false,
          profile_picture:
            'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg',
          provider: 'EMAIL',
          role_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    ),
  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {})
};
