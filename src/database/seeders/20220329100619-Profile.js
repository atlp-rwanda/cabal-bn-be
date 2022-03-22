'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Profiles', 
    [
      {
        age: 20,
        occupation: "software engineer",
        language: "english",
        nationality: "rwandan",
        date_of_birth: "2000-02-01",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: 20,
        occupation: "software engineer",
        language: "english",
        nationality: "rwandan",
        date_of_birth: "2000-02-01",
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: 20,
        occupation: "software engineer",
        language: "english",
        nationality: "rwandan",
        date_of_birth: "2000-02-01",
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
      age: 20,
      occupation: "software engineer",
      language: "english",
      nationality: "rwandan",
      date_of_birth: "2000-02-01",
      user_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Profiles', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
