module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Barefoot User",
          email: "user@bfnd.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hirwa Eli",
          email: "eli@bfnd.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Users", null, {}),
};
